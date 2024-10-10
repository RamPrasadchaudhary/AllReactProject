import {useState, useEffect} from 'react';
// function Sample() {
//   const [name,setName] = useState("Jack")
//   const [age,setAge] = useState(20)
//   const [address,setAddress]=useState("Kathmandu")
//   useEffect(()=>{
//    console.log("use Effect called")
//   })
//   return (
//   <div>
//         <h1>Your Name is: {name}</h1><br/>
//         <h1>Your Age is: {age} </h1><br/>
//         <h1>Your Address is :{address}</h1>
//         <button className="btn btn-primary" onClick={()=>setName("Tom")}>Update Name</button>&nbsp;&nbsp;
//         <button className="btn btn-primary mx-5" onClick={()=>setAge(age+1)}>Increment Age</button>
//         <button className="btn btn-secondary" onClick={()=>setAddress("Butwal")}>Update Loaction</button>
//     </div>
//  );
//}

// Empty Parameter

// function Sample() {
//   const [name,setName] = useState("Jack")
//   const [age,setAge] = useState(20)
//   useEffect(()=>{
//     console.log("use Effect called")
//   },[])
//   return (
//     <div>
//       <h1>Your Name is: {name}</h1><br/>
//       <h1>Your Age is: {age} </h1><br/>
//       <button className="btn btn-primary" onClick={()=>setName("Tom")}>Update Name</button>&nbsp;&nbsp;
//       <button className="btn btn-primary" onClick={()=>setAge(age+1)}>Increment Age</button>
//     </div>
//   );
// }

//Paramenter useState


function Sample() {
  const [name,setName] = useState("Jack")
  const [age,setAge] = useState(20)
  useEffect(()=>{
    console.log("use Effect called")
  },[age])
  return (
    <div className='container col-6 mt-5 mb-5 bg-primary'>
      <h1>Your Name is: {name}</h1><br/>
      <h1>Your Age is: {age} </h1><br/>
      <button className="btn btn-danger" onClick={()=>setName("Tom")}>Update Name</button>&nbsp;&nbsp;
      <button className="btn btn-danger" onClick={()=>setAge(age+1)}>Increment Age</button>
    </div>
  );
}
export default Sample;
