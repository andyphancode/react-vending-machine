import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Water from "./Water";
import GrimaceShake from "./GrimaceShake";


function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route exact path="/soda" element={<Soda />} />
        <Route exact path="/water" element={<Water />} />
        <Route exact path="/grimaceshake" element={<GrimaceShake />} />      
    </Routes>

    </BrowserRouter>
  );
}

export default App;
