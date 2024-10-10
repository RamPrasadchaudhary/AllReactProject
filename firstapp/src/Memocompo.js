import React from 'react'

function Memocompo({name}) {
    console.log("Rendering  Memo Component")
  return (
    
    <div>
    {name}
    </div>
  )
}

export default Memocompo