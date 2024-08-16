import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {userid} = useParams();//this helps to access the value from url this accesses user/userid s userid
    return(
            <div>User:{userid}</div>
    )
}
export default User;