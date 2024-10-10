import React from "react";
import "./testimonial.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Testimonial = () => {
  function Card({name,address,post,gender, color}){
    return(
     <div >
     <pre style={{backgroundColor:`${color}`, marginLeft:"10px"}}>
          <p>I am {name}</p>
          <p>I am from {address}</p>
          <p>I am working as {post}</p>
          <p>I am {gender}</p>
     </pre>
     </div>
    )
  }
  const data=[{id:1,name:"Ram Raj",address:"Nepal",post:"teacher",gender:"Male",color:"green"},
    {id:2,name:"Ram Charan",address:"India",post:"Police",gender:"Male",color:"blue"},
    {id:3,name:"Ram karan",address:"Sri lanka",post:"CEO",gender:"Female",color:"yellow"},
    {id:4,name:"Ram bilash",address:"Bhutan",post:"Doctor",gender:"Male",color:"gray"},
    {id:5,name:"Ram Prasad Chudhary",address:"Bangladesh",post:"Secretary",gender:"Male",color:"lightblue"},
  ];

  return (
    <>
    <content>
    <div className="d-flex flex-row justify-content-center flex-wrap mt ">
        {data.map((data)=>(<Card key={data.id}  name={data.name} address={data.name} post={data.post} gender={data.gender} color={data.color}/>

        ))}
    </div>
    </content>
    <div className="testimonal">
      <div className="leftside">
        <div className="card-body">
          <h5>Project</h5>
          <img src="logo192.png" />
          <diV className="card-footer">
            <h4>I am React </h4>
            <p>
              I have completed the react project for <span>Chat-APP</span>
            </p>
          </diV>
        </div>
      </div>
      <div className="rightside">
        <div className="card-body">
          <h5>Project</h5>
          <img src="logo192.png" />
          <diV className="card-footer">
            <h4>I am MERN </h4>
            <p>
              I have completed the react project for <span>Chat-APP</span>
            </p>
          </diV>
        </div>
      </div>
    </div>
    </>
  );
};

export default Testimonial;
