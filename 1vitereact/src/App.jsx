import Ddv from "./ddv"

function App() {
  const username = "darshit"
 
  return (
  <>
  <Ddv/>
  <h2>hey {username}</h2>
  <p>hiii {username}</p>
  </>//<></> are called fragments we can also do the same thing using the div
    
   //inside we can retun only only element thus we use <> </> and in between we can use as many as we want so it will return elemnts inside an elemnt

  )
}

export default App
