import React, { useState } from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import grimaceShakeImg from "./GrimaceShake.png";
import grimaceImg from "./Grimace.PNG";
import "./GrimaceShake.css";


function GrimaceShake() {
    const [grimace, setGrimace] = useState(false);
    const handleSubmit = evt => {
        evt.preventDefault();
        setGrimace(!grimace);
    }
    return (
      <div className="GrimaceShake" style={{ backgroundImage: `url(${grimaceShakeImg})` }}>
        <Message>
          <h1>help me</h1>

          {grimace ? 
            <div>
                <img src={grimaceImg} alt="YOU CANNOT RUN FOREVER" />
                <h1><Link to="/" className="Link">run</Link></h1>
            </div>

            :
            <form onSubmit={handleSubmit}>
                <button>go back</button>
            </form>
        }
          
        </Message>
      </div>
    );
  }

export default GrimaceShake;