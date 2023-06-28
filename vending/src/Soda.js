import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import sodaImg from "./Soda.jpg";
import "./Soda.css";


function Soda() {
    return (
      <div className="Soda" style={{ backgroundImage: `url(${sodaImg})` }}>
        <Message>
          <h1>pop fizzleeee</h1>
          <h1><Link to="/" className="Link">Go Back!</Link></h1>
        </Message>
      </div>
    );
}

export default Soda;