import { createSlice,nanoid} from "@reduxjs/toolkit";
//nanoid is just to generate unique ids

const initialState = {
    todos:[{id:1,text:"hello"}]
}
export const todoSlice =  createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo = {
                id:nanoid(),
                text:action.payload//payload is object that is used to exctract info

            }
            state.todos.push(todo);//now our todo is directely added to the todos array
        },
        removeTodo:(state,action)=>{
                state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            const{id,newtext} = action.payload;
            const todoToUpdate = state.todos.find((todo)=>todo.id===id)
            if(todoToUpdate)
                {
                    todoToUpdate.text = newtext;
                }

        },
        deleteTodo:(state,action)=>{
            const idToRemove = action.payload;
            state.todos = state.todos.filter((todo)=>todo.id !== idToRemove)    
        }
    }
}) 
//reducers are nothing but the functionality to your project and inside it is always fixed params state,action
//action used to fetch data while sate tells us about current state

export const{addTodo,removeTodo,updateTodo} =  todoSlice.actions

export default todoSlice.reducer//we have to do both individually export reducers as well as export reducers for the store