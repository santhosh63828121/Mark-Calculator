
// import React from 'react';
// import './App.css';
// import  Home from '../src/componants/Ten/Home';
// import Twelve from '../src/componants/twelveth/Twelve';
// import Cut from '../src/componants/CutOff/Cut';
// import Dash from '../src/componants/DashBord/Dash'
// function App() {
//   return (
//     <>
//       <Dash/>
//       <Twelve/>
//       <Home/>
//       <Cut/>

//     </>
//   )
// }

// export default App


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home from '../src/componants/Ten/Home';
import Twelve from '../src/componants/twelveth/Twelve';
import Cut from '../src/componants/CutOff/Cut';
import Dash from '../src/componants/DashBord/Dash'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Dash />} />
        <Route path="/ten" element={<Twelve />} />
        <Route path="/cutoff" element={<Cut />} />
        <Route path="/twelve" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
