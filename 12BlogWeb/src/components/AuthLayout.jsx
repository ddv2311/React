import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//the name of the function and the file name can be diffrent
//I gave here name Protected instead of AuthLayout because I want to conditonally render here   
export default function Protected({children,authentication="true"}){
    const navigate = useNavigate()
    const [loader,setLoader] = useState(true)
    const authStatus = useSelector(state => state.auth.status)
    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }
        else if(!authentication && authStatus !== authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus,navigate,authentication])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}

