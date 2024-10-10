import { useState } from 'react'
import Card from './component/card'
import './App.css'
import BgChanger from './component/BgChanger'
function App() {
  const [count, setCount] = useState(0)
let msg={
name:"Ram",
add:"Nepal"
}
let newArr=[1,45,67,54,34,43]
  return (
    <>
{/*    
  <Card chanel="Ram"  cardData={msg} arr={newArr} /> */}
  {/* <Card  cardData={msg}/> */}
<BgChanger/>

    </>
  )
}

export default App
