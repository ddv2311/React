import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import React from 'react'
import Todos from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='bg-gray-500 text-white text-3xl'>Hey</h2>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
