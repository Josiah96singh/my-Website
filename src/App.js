import React, { Component } from "react";
import "./App.css";
import ParticlesView from "./Components/ParticlesView"
import NavBar from "./Components/Nav"
import Header from "./Components/Header"
import SkillsContent from "./Components/SkillsContent"
import ProjectsContent from "./Components/ProjectsContent"
import Contact from "./Components/Contact"

class App extends Component {

  render() {
    return (
      <div className="app">
        {/* HEADER */}
        <div className="header">
          <ParticlesView/>
          <NavBar/>
          <Header/>
        </div> 

        {/* BODY|CONTENT */}
        <div className="content">
          <SkillsContent/>
          <ProjectsContent/>
          <Contact/>
        </div>
      </div>
    );
  }
}

export default App;
