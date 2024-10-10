import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <>
      <div className="foot">
        <div className="social">
          <h4></h4>
          <ul>
            <li>
              <a>Linkdin</a>
            </li>
            <li>
              <a>Youtube</a>
            </li>
            <li>
              <a>FaceBook</a>
            </li>
            <li>
              <a>Gmail</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <pre>
            <p>Ram Prasad Chaudhary</p>
            <p>Address:Nepal</p>
            <p>Btech:Computer Engineering</p>
          </pre>
        </div>
        <div className="Location">
          <h4>Location</h4>
          <p>
            Shivraj-08
            <br />
            kapilvastu Lumbini
            <br /> Nepal
          </p>
        </div>
      </div>
      
    </>
  );
};

export default Footer;
