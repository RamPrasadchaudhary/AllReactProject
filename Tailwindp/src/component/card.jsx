import React from 'react'

const Card = ( props) => {
    
   // const {name ,add}=cardData
  return (
   
<>
{/* <h1 className='bg-slate-400'>this is card </h1>
<p>{chanel}</p>
<p>{arr.map((element ,index)=>(
    <p key={index}>{element}</p>
))}</p>
<p>{props.cardData.name}</p> */}
<h5>{props.cardData.name}</h5>
</>

  )
}

export default Card