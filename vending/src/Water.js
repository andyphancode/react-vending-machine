import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import waterImg from "./Water.jpg";
import "./Water.css";


function Water() {
    return (
      <div className="Water" style={{ backgroundImage: `url(${waterImg})` }}>
        <Message>
          <h1>your pee will be so clear</h1>
          <h1><Link to="/" className="Link">Go Back!</Link></h1>
        </Message>
      </div>
    );
}

export default Water;