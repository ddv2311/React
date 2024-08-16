import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   // let counter = 5//in this way in react the ui cannot be updated
    //we use react as we can tareget  many places consiteing same code
    //to counter this problem we will use the concept of hooks
    let [counter,setCounter] = useState(5)//here counter is variable and set countor is method 
    //using this we donot need any type of dom methods lik getbyid or qureryselector etc we can perform directly thus ppl lik react more

  //useState takes values in batches and then execute them
    const addValue = ()=>{
      if(counter>19){
        return ; 
      }
      else{
      counter++;
      setCounter(counter);
      //setCounter(prevCounter => prevCounter+1)
      //setCounter(prevCounter => prevCounter+1)
      //setCounter(prevCounter => prevCounter+1)
      //setCounter(prevCounter => prevCounter+1)
//now if we click the add button the value is done +4 dirertly as we are using here callback
    }
      console.log(counter);
    }
    const subValue = ()=>{

      if(counter<=0){
        counter = 0
        return 0;
      }else{
      counter--}
      setCounter(counter)
      console.log(counter);
    }


//as we are using staes so  on adding vaulue the value will be fugging increased at every place
  return (
    <>
     <h1>ddv react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value: {counter}</button>
     <button onClick={subValue}>Sub value: {counter}</button>
     <footer>footer : {counter}</footer>
    </>
  )
}

export default App
