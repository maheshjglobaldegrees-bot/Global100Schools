import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import React from "react";
import "./App.css";


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/pages/homepage/Home';
import Aboutus from './components/pages/aboutus/Aboutus';
import Services from './components/pages/service/Services';
import Contactus from './components/pages/contactus/Contactus';
import Process from './components/pages/process/Process';
import Gallery from './components/pages/gallery/Gallery';
import Header from './components/header/Header'
import Studyinusa from './components/pages/destinations/usa/Studyinusa';
import Studyinuk from './components/pages/destinations/uk/Studyinuk';
import Studyinaustralia from './components/pages/destinations/australia/Studyinaustralia';
import Studyincanada from './components/pages/destinations/canada/Studyincanada';
import StudyinIreland from './components/pages/destinations/Ireland/StudyinIreland';
import StudyinNewZealand from './components/pages/destinations/newzealand/StudyinNewZealand';


const App = () => {
  return (
    <Router>
      <Header/>
      <div className="container-fluid ">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contactus" element={<Contactus/>} />
          <Route path="/process" element={<Process/>} />
          <Route path="/gallery" element={<Gallery/>} />
          <Route path="/destinations/usa" element={<Studyinusa/>}/>
          <Route path="/destinations/uk" element={<Studyinuk/>}/>
          <Route path='/destinations/australia' element={<Studyinaustralia/>}/>
          <Route path='/destinations/canada' element={<Studyincanada/>}/>
         <Route path='/destinations/ireland' element={<StudyinIreland/>}/>
         <Route path='destinations/newzealand' element={<StudyinNewZealand/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
