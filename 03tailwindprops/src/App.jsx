import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'
//in tailwind we use className in place of class
//I can make card as many time as I want using <Card /> but to change it from  inside we need props
//we can take props as a parameter in card function in Card.jsx and use props.username to write username as we want
function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "darshit",
    age : 19
  }
  return (
    <>
      <h1 className='bg-green-400  text-black p-4 rounded-xl' >Tailwind test</h1>

      <Card username="ddv" btnText = "click to follow" />
    <Card username="darshit" btnText = "Do press the bell icon"/>
     </>
  )
}

export default App
