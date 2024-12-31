import { useState } from 'react'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15);

  const addValue = ()=>{
    if(counter < 20){
      counter = counter + 1;
      setCounter(counter);
    }else{
      return;
    }
  }

  const removeValue = ()=>{
    if(counter <= 0){
      return;
    }else{
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>React with VkT</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
