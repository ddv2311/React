import { useEffect,useState } from "react";

//we can name the function with any name but there's a convention that start its name with use
//by this way we can design our custom hooks
function useCurrencyInfo(currency){
    const [data,setData] = useState({})//if there is nothing fetched then also an empty object will stay
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency]))
    },[currency])
    console.log(data);
    return data;
}
export default useCurrencyInfo;