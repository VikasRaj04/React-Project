import { useState } from 'react'
import Card from './components/Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Vikas",
    age: 21
  }

  let myArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
    <Card username="chaiaurcode" profile="Software Engineer, Elysium"/>
    <Card username="vktcoder" />
    </>
  )
}

export default App
