import React from "react";
import Navbar from "./components/navbar/navbar";
import Intro from "./components/intro/intro";
import './App.css'
import Services from "./components/services/services";
import Experience from "./components/experience/experience";
function App() {
  return (
    <div className="App">
<Navbar/>
<Intro/>
<Services/>
<Experience/>
    </div>
  );
}

export default App;
