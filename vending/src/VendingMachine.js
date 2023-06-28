import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import "./Link.css";
import vendingMachineImg from "./VendingMachine.jpg";

function VendingMachine() {
    return(
      <div
        className="VendingMachine"
        style={{ backgroundImage: `url(${vendingMachineImg})` }}>
        <Message>
            Welcome to the vending machine area! Please pick your drink please please please please
          <h1> <Link to="/soda" className="Link-vending">soda</Link></h1>
          <h1><Link to="/water" className="Link-vending">water</Link></h1>
          <h1><Link to="/grimaceshake" className="Link-vending"><span style={{textDecoration: 'line-through', color: "purple"}}>death</span>Grimace Shake</Link></h1>
          please please  <small>ple</small>as<small>e</small> please 
        </Message>
      </div>
    );
  }
  
  export default VendingMachine;
  