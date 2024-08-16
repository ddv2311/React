import React,{useId} from "react";
//used to generate new unique ids
//here I am using React.forwardRef for forwarding the reference 
//best way to understand it as I am using diffrent input filed in an login page so as input are diffrent container so the state of its is 
//also needed in login so by the concept of forward referencing this problem is solved
const Input = React.forwardRef(function Input({
     label,
     type = "text",
     className = "",
     ...props

},ref){
    const id = useId()
    return(
        <div className="w-full">
            { label &&  <label
                className="inline-block mb-1 pl-1"
                htmlFor={id}
                >   {label}
                </label>
                }
                <input 
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  ${className}`}
                ref={ref}//this gives reference for parent component
                {...props}
                id={id}
                />


        </div>
    )
})
export default Input;