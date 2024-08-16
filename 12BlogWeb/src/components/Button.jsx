//common generic button that can be used anywhere

import React from "react";
//the values given inside the Button as arguments are actually default values
function Button({
    children,
    type = 'button',
    bgColor = "bg-blue-600",
    textColor = 'text-white',
    className = '',
    ...props
}){

    //here I am writing my style with style attributes got from the function as argument this is popular way of writting it.
    return(
        <button className= {`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    )
}
export default Button