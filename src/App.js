import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,  Routes, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Events from './Pages/Events.js';
import EventDetails from './Pages/EventDetails.js';
import Gallery from './Pages/Gallery.js';
import Footer from './Components/FooterComponent';
import ConfigDataService from "./Services/ConfigService";


function App() {

    const [config, setConfig] = useState({});

    useEffect(() => {
    retrieveConfig();
  }, []);

    const retrieveConfig = () => {
    ConfigDataService.getAll()
      .then(response => {
       console.log("tutossssr", response);
        setConfig(response.data);
        console.log("about", response.data.system_config);
      })
      .catch(e => {
        console.log(e);
        // setConfig({});
      });
  };

  return (
    <Router>
      <div className="">
    <Navbar config={config}/>
    </div>
    <br /><br /> <br /> <br />
    <div className="">
    <Routes>
    <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/contact" element={<Contact config={config}/>} />
      <Route exact path="/events" element={<Events/>}/>
      <Route path="/eventdetails/:id" element={<EventDetails/>}/>
      <Route exact path="/gallery" element={<Gallery/>}/>
    </Routes>
    </div>
    <Footer config={config}/> 
    </Router>
  );
}

export default App;
