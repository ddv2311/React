import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
//using the concept of loader we can do things more fast then compared to useEffect
function Github(){
        const  data  = useLoaderData()
    //const[data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/ddv2311')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return(
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">Github followers:{data.followers}
            <img  src={data.avatar_url} alt="Git Picture" />
        </div>
    )
}

export default Github

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/ddv2311')
    return response.json()
}