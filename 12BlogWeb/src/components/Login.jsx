import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import {Button,Input,Logo} from "./index"
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"
//login as authLogin means here login will be known as authLogin this is usually used style in industry level project
//when the form will be submitted handleSubmit is an event that will occur
function Login(){

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register,handleSubmit} = useForm()//this is syntanx of using react-hook froms
    const[error,setError] = useState("")

    const login = async(data) => {
        setError("")
        try{
            const session = await authService.login(data)//here in respose session is get so stored it in variable for future use
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData))//now if user is logged in navigate them to root
                navigate("/")
            }
        }
        catch(error){
            setError(error.message)
        }
    }

    return(
        
            <div
            className='flex items-center justify-center w-full'
            >
                <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                            <span className="inline-block w-full max-w-[100px]">
                                <Logo width="100%" />
                            </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
                <p className="mt-2 text-center text-base text-black/60">
                            Don&apos;t have any account?&nbsp;
                            <Link
                                to="/signup"
                                className="font-medium text-primary transition-all duration-200 hover:underline"
                            >
                                Sign Up
                            </Link>
                </p>
                {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
                <form onSubmit={handleSubmit(login)} 
                className="mt-8">
                    <div className="space-y-5">
                        <Input 
                        label="Email: "
                        placeholder="Enter your email"
                        type="email"//to use react hooks form use of ...register is must as its part of syntax
                        {...register("email",{
                           required:true,
                           validate: {
                            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                            "Email address must be a valid address",
                        }//this is regex which I have copied from online
        
                        })}
                        />
                        <Input 
                        label="Password: "
                        type = "password"
                        placeholder="Enter your password"
                        {...register("password",{
                            required:true,
                        })}
                    
                        />

                        <Button
                        type = "submit"
                        className = "w-full"
                        >Sign in</Button>
                    </div>



                </form>
                </div>
            </div>
          
    )
}
export default Login