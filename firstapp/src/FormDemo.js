import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("Ram Prasad");
  const [password, setPassword] = useState("XYZ");

  return (
    <>
           {" "}
      <div
        className="container bg-warning  w-50"
        style={{ border: "1px Solid " }}
      >
               {" "}
        <form>
                   {" "}
          <div className="form-group">
                        <label htmlFor="name">Username:</label>
                       {" "}
            <input
              style={{ width: "100%" }}
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Name"
              name="name"
            />
                     {" "}
          </div>
          <div className="form-group">
                        <label htmlFor="email">Email:</label>
                       {" "}
            <input
              style={{ width: "100%" }}
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              name="email"
            />
                     {" "}
          </div>
                   {" "}
          <div className="form-group">
                        <label htmlFor="pwd">Password:</label>
                       {" "}
            <input
              style={{ width: "100%" }}
              type="password"
              className="form-control"
              id="pwd"
              placeholder="Enter password"
              name="password"
            />
                     {" "}
          </div>
          <div>
            <label htmlFor="check">Input Address</label>
            <input
              style={{ width: "40%" }}
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="form-control"
              placeholder="Enter Name"
            />
            ;
          </div>
          <div>
            <label htmlFor="check">Input Password</label>
            <input
              style={{ width: "40%" }}
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter Name"
            />
            ;
          </div>
                   {" "}
          <button type="submit" className="btn btn-primary">
                        Login          {" "}
          </button>
                 {" "}
        </form>
             {" "}
      </div>
         {" "}
    </>
  );
};
export default Login;
