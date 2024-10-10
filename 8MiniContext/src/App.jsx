import { useState , useContext} from "react";
import UserContextProvider from "./Context/UserContextProvider";
import Login from "./Component/Login";
import Profile from "./Component/Profile";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <UserContextProvider>
        
        <h1>Hello Hitesh</h1>
        <Login/>
        <Profile/>
      </UserContextProvider>
    </>
  );
}

export default App;
