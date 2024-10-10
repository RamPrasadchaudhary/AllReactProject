import React, { useState } from "react";


const Formpractice = () => {
    const [values , setValues]=useState({
        FirstName:'',
        LastName:'',
        email:'',
        gender:'',
        contact:'',
        subject:'',
        resume:'',
        url:'',
        about:''

    })
    const handleChanges=(e)=>{
setValues({...values,[e.target.name]:[e.target.value]})
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
     //   axios.post('url' ,values)
        console.log(values)
    }
    const ResetFun = () => {
        setValues({
          FirstName: '',
          LastName: '',
          email: '',
          gender: '',
          contact: '',
          subject: '',
          resume: '',
          url: '',
          about: ''
        });
      };
  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input type="text" placeholder="Enter first Name" name="FirstName"  onChange={(e)=>handleChanges(e)}  required value={values.FirstName}/>

        <label htmlFor="lastName">Last Name</label>
        <input type="text" placeholder="Enter last Name" name="LastName" onChange={(e)=>handleChanges(e)}  required value={values.LastName}/>

        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter email" name="email" onChange={(e)=>handleChanges(e)} required value={values.email} />
        <label htmlFor="contact">Contact</label>
        <input type="text" placeholder="Enter Contact" name="contact"  onChange={(e)=>handleChanges(e)} required value={values.contact} />
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" onChange={(e)=>handleChanges(e)}  value={values.gender} />
        Male
        <input type="radio" name="gender" onChange={(e)=>handleChanges(e)} value={values.gender}/>
        Female
        <input type="radio" name="gender" onChange={(e)=>handleChanges(e)}  value={values.gender}/>
        <input type="radio" name="gender" onChange={(e)=>handleChanges(e)}  value={values.gender}/>
        other
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={(e)=>handleChanges(e)} value={values.subject} required>
          <option value="math">Math</option>
          <option value="physic">Physic</option>
          <option value="chemistry">Chemistry</option>
          <option value="Nepali">Nepali</option>
        </select>
        <label htmlFor="resume">Resume</label>
        <input type="file" placeholder="Select Resume" name="resume" onChange={(e)=>handleChanges(e)} value={values.resume} required/>
        <label htmlFor="url">URL</label>
        <input type="text" name="url" placeholder="Enter Image Url" onChange={(e)=>handleChanges(e)}value={values.url} required />
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          cols="30"
          row="10"
          placeholder="Enter Discription"
          onChange={(e)=>handleChanges(e)
            
          }
          value={values.about}
          required
        ></textarea>
        <hr />
        <button type="button" onClick={ResetFun}>Reset</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Formpractice;
