import React, { useState } from 'react';
import './App.css'; // Ensure this file exists

const App = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isGridView ,setIsGridView]=useState(false)
 
  const [count, setCount]=useState(0);
const handleIncre=()=>{
  setCount(count+1)
}
const handleDecre=()=>{
  setCount(count>0?0:count-1)
}
  return (
    <>
<div>
<p>Count:{count}</p>
<button onClick={handleIncre}>+</button>
<button onClick={handleDecre}>-</button>
</div>

    <button onClick={() => setIsLiked(!isLiked)}>
    {isLiked ? '❤️ Liked' : '🤍 Like'}
  </button>
   <div>
   <button onClick={()=>setIsGridView(!isGridView)}>Switch to {isGridView?'List':'Grid'}View</button>
   <div className={isGridView?'grid-view':'list-view'}>
   <div>item 1</div>
   <div>item 2</div>
   <div>item 3</div>
   </div>
   </div>
     
    </>
  );
}

export default App;
