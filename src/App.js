import React, { Component } from "react";
import "./App.css";
import avatar from "./Components/Pic.jpg";
import Particles from "react-particles-js";
import Bubble from "./Components/Theme/Bubble";
import Default from "./Components/Theme/Default";
import Git from "./Components/Icons/Git.png";
import LD from "./Components/Icons/LD.png";
import Twitter from "./Components/Icons/Twitter.png";
import NewsMock1 from "./Components/news1.png";
import Unsplash from "./Components/unsplash.gif";
import Resume from "./Components/Resume.pdf";

class App extends Component {
  constructor() {
    super();
    this.state = { particleConfig: Default };
  }
  render() {
    return (
      <div className="app">
        <nav>
          <a href="#header">Home</a>
          <span>/</span>
          <a href="#skill_content">Skills</a>
          <span>/</span>
          <a href="#projects_content">Projects</a>
          <span>/</span>
          <a href={Resume} target="blank">
            Resume &#9756;
          </a>
        </nav>

        <div className="header">
          <div class="circular--portrait">
            <img src={avatar} alt="Avatar" />
          </div>

          <h1 className="TitleName">Josiah Singh.</h1>
          <h4 className="TitleDescription">
            Student Developer at Haaga-helia UAS
          </h4>
          <div className="Icons">
            <a
              className="Icon1"
              href="https://github.com/Josiah96singh"
              target="_blank"
            >
              <img src={Git} width="30px" />
            </a>
            <a
              className="Icon2"
              href="https://twitter.com/josiahernest?lang=en"
              target="_blank"
            >
              <img src={Twitter} width="30px" />
            </a>
            <a
              className="Icon3"
              href="https://www.linkedin.com/in/josiah-ameet-singh-59398611b/"
              target="_blank"
            >
              <img src={LD} width="32px" />
            </a>
          </div>
          <div className="Line" />

          <p>
            A passionate web developer who enjoys building great digital
            experiences for people. I'm currently pursuing a Bachelors degree in
            Business Information &#38; Technology.
          </p>
        </div>

        <div className="content">
          <div id="skills_content" className="skills_content">
            <h1>SKILLS</h1>
            <div className="grouped_skills">
              <div className="skills">
                <ul>
                  <h4>FRONTEND</h4>
                  <li>
                    <h5>HTML5/CSS3</h5>
                  </li>
                  <li>
                    <h5>Javascript</h5>
                  </li>
                  <li>
                    <h5>React</h5>
                  </li>
                  <li>
                    <h5>React Native</h5>
                  </li>
                </ul>
              </div>
              <div className="skills">
                <ul>
                  <h4>BACKEND</h4>
                  <li>
                    <h5>Firebase</h5>
                  </li>
                  <li>
                    <h5>SQL Server</h5>
                  </li>
                  <li>
                    <h5>Spring</h5>
                  </li>
                </ul>
              </div>
              <div className="skills">
                <ul>
                  <h4>DESIGN/UX</h4>
                  <li>
                    <h5>Sketch</h5>
                  </li>
                  <li>
                    <h5>Adobe XD</h5>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div id="projects_content" className="projects_content">
            <h1>PROJECTS</h1>
            <p>
              A list of recent projects I've been working on like apps,websites
              and design prototypes.
            </p>
            <div className="grouped_projects">
              <div className="projects">
                <h2> NEWS APP</h2>
                <p>#reactnative #firebase</p>
                <a href="https://expo.io/@josiahsingh/newsapp" target="blank">
                  <img src={NewsMock1} />
                </a>
              </div>
              <div id="projects" className="projects">
                <h2> UNSPLASH CLONE</h2>
                <p>#react</p>
                <a href="https://js-unsplash-react.netlify.com/" target="blank">
                  <img src={Unsplash} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact">
            <a
              href="mailto:Josiahsingh1996@gmail.com?Subject=Hello"
              target="_top"
            >
              CONTACT ME
            </a>
          </div>
        </div>
        <Particles
          params={this.state.particleConfig}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </div>
    );
  }
}

export default App;
