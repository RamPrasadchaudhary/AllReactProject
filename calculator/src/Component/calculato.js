import React, { useState }  from 'react'
import '../App.css';
// import { getValue } from '@testing-library/user-event/dist/utils';
const calculato = () => {
   const[data,setData]=useState(" ");
    const getValue=(event)=>{
        console.log(event.target.value);
      setData(data.concat(event.target.value));
     }
     const calculation=()=>
     {
        setData(eval(data).toString());
     }
     const back=()=>{
        setData(data.slice(0,-1));
     }
     const clear=()=>{
        setData("");
     }
  return (
    <div className='container'>
        <div>
            <input value={data} style={{ marginTop:"20px",  width:"350px" ,height:"30px"}} placeholder='0'/>
        </div>
        <div>
            <button onClick={getValue} value=')'>)</button>
            <button onClick={getValue} value='('>(</button>
            <button onClick={getValue} value='%'>%</button>
            <button onClick={clear} >AC</button><br></br>

            <button onClick={getValue} value='7'>7</button>
            <button onClick={getValue} value='8'>8</button>
            <button onClick={getValue} value='9'>9</button>
            <button onClick={getValue} value='*'>*</button><br></br>


            <button onClick={getValue} value='4'>4</button>
            <button onClick={getValue} value='5'>5</button>
            <button onClick={getValue} value='6'>6</button>
            <button onClick={getValue} value='-'>-</button><br></br>

            <button onClick={getValue} value='1'>1</button>
            <button onClick={getValue} value='2'>2</button>
            <button onClick={getValue} value='3'>3</button>
            <button onClick={getValue} value='+'>+</button><br></br>

            <button onClick={getValue} value='0'>0</button>
            <button onClick={back} >Back</button>
            <button onClick={calculation} >=</button>
            <button onClick={getValue} value='/'>/</button>
        </div>
    </div>
  )
}

export default calculato