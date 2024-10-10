 import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";

function App() {
  //let counter = 5;

  const [counter , setCounter]=useState(15)
  const addValue = () => {
   setCounter(counter + 1)
  };

  const subValue = () => {
   counter>0?setCounter(counter - 1): "0"
   };

  return (
    <>
      <h2>Counter</h2>
      <h3>Couter Value :{counter}</h3>
      <button onClick={addValue}>Add value</button>
      <br />

      <p id="demo">Ram</p>
      <button onClick={subValue}>Remove value: {counter}</button>
    </>
  );
}

export default App;
