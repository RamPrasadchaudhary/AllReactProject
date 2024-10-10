import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import validateField from "./Validate";
import './form1.css';
const initialFormData={
  name:"",
  email:"",
  password:'',
  conformPassword:"",
  gender:"",
  hobbies:"",
  country:""

}
const Form = () => {
  
  const [formData,setFormData]=useState(initialFormData);
  const [formErrors,setFormErrors]=useState(initialFormData);
const handleChange=(event)=>{
  var fieldValue;
  const { name, value, type } = event.target;
  if(type==="checkbox")
  {
    if (formData.hobbies.includes(value)) {
      fieldValue = formData.hobbies.filter((hobby) => hobby !== value);
    } else {
      fieldValue = [...formData.hobbies, value];
    }
  }
  if(type==="radio")
  {
    fieldValue=value;
  }
  else{
    fieldValue =value.trim();
  }
  setFormData({ ...formData, [name]: fieldValue });
 //Validates the field by calling the validateField function from the Validate.js file, and passing the field name, value, and current form data.
 const error = validateField(name, fieldValue, formData);

 //The resulting error message is then stored in the formErrors state variable.
 setFormErrors({ ...formErrors, [name]: error });
};
 const handleSubmit = (e) => {
    e.preventDefault();
    const newFormErrors = {};
    //Validates all form fields by calling validateField for each field and storing the resulting error messages in a new object newFormErrors.
    Object.keys(formData).forEach((fieldName) => {
      newFormErrors[fieldName] = validateField(
        fieldName,
        formData[fieldName],
        formData
      );
    });
    setFormErrors(newFormErrors);
    //If any of the fields have errors, the form submission is aborted.
    if (Object.values(newFormErrors).some((error) => error)) {
      return;
    }
    const dataString = Object.keys(formData)
      .map((fieldName) => `${fieldName}: ${formData[fieldName]}`)
      .join("\n");
    // If there are no errors, an alert message is shown to the user with the form data and each data on newline.
    alert(`Form data:\n${dataString}`);
    // The formData and formErrors state variables are reset to their initial values using setFormData() and setFormErrors() .
    setFormData(initialFormData);
    setFormErrors({});
  };

  return (
    <div className="form">
      <form id="register" onSubmit={handleSubmit}>
        <h1 className="tittle">Contact Form</h1>
        <div className="form-group">
          <label or="name">Name:</label>
          <input type="text"  id="name" name="name"  value={formData.name} onChange={handleChange}/>
          {formErrors.name && <span className="error">{formErrors.name}</span>}
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}></input>
          {formErrors.email && <span className="error">{formErrors.email}</span>}
        </div>
        <div className="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          {formErrors.password && <span className="error">{formErrors.password}</span>}
        </div>
        <div className="form-group">
          <label for="conformPassword">Conform Password:</label>
          <input type="password" id="conformPassword" name="conformPassword" value={formData.conformPassword} onChange={handleChange} />
          {formErrors.conformPassword && <span className="error">{formErrors.conformPassword}</span>}
        </div>
        <div className="form-group">
          <div className="form-row">
            <label for="gender">Gender:</label>
            <label for="male">Male</label>
            <input type="radio" name="gender" id="male" value="male"  checked={formData.gender==="male"} onChange={handleChange}/>
            <label for="female">Female:</label>
            <input type="radio" name="gender" id="Female" value="Female" checked={formData.gender==="Female"} onChange={handleChange}></input>
            <label for="other">Others</label>
            <input type="radio" name="gender" id="other" value="other"  checked={formData.gender==="other"} onChange={handleChange}/>
          </div>
          {formErrors.gender && <span className="error">{formErrors.gender}</span>}
        </div>
        <div className="form-group">
          <div className="form-row">
            <label for="hobbies">Hobbies:</label>
            <label for="travel">Travel</label>
            <input type="checkbox" name=" hobbies" id="travel"  value="travel" onChange={handleChange} checked={formData.hobbies.includes("travel")}></input>
            <label for="swim">Swim</label>
            <input type="checkbox" name=" hobbies" id="swim"value="swim" onChange={handleChange} checked={formData.hobbies.includes("swim")}></input>
            <label for="read">Read</label>
            <input type="checkbox" name=" hobbies" id="read" value="read" onChange={handleChange} checked={formData.hobbies.includes("read")}></input>
          </div>D
          {formErrors.hobbies && <span className="error">{formErrors.hobbies}</span>}

        </div>
        <div className="form-group">
        <label for="country">County:</label>
        <select type="select" name="country" value={formData.country} onChange={handleChange}>
        <option value="" > select the country</option>
        <option value="Nepal"> Nepal</option>
        <option value="India"> India</option>
        <option value="Pakistan"> Pakistan</option>
        <option value="USA"> USA</option>
        </select>
        {formErrors.country && <span className="error">{formErrors.country}</span>}

        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
