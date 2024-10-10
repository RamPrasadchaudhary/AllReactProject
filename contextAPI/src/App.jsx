import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import ProfileProps from './components/ProfileProps'
import Props from './components/Props'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ProfileProps name="Chaudhary"/>
    <Props/>
    </>
  // <UserContextProvider>
  //    <h1>React video for Context API</h1>
  //    <Login name="Alice" />
  //    <Profile/>
  // </UserContextProvider>
  )
}

export default App
