import react, {useState} from "react";
const Login=()=>{
    const[status,setStatus]=useState(true);
    const[data,setData]=useState({
        username:"Ram Prasad",
        password:"Chaudhary"

    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(!data.username || !data.password)
            {
                setStatus(false);
            } 
            else{
                setStatus(true);
            }
    };
    const handleChange=(event)=>{
        let {name,value}=event.target;
        setData({data,[name]:"Ram chaudhry"})
    }


    return (
        <>
          <div className="container mb-5" >
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Username:</label>
                <input
                  style={{ width: "40%" }}
                  type="text"
                  id="username"
                  name = "username"
                  value={data.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  style={{ width: "40%" }}
                  type="password"
                  id="password"
                  name = "password"
                  value={data.password}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              {status === false && <div className="text-error">Enter User Name and Password</div>}
              {status === true && <div className="text-success">Login Successful</div>}
            </form>
          </div>
        </>
      );
    };
    export default Login;
