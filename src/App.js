import React, { Component } from "react";
import "./App.css";
import avatar from "./Components/Pic.jpg";
import Particles from "react-particles-js";
import Default from "./Components/Theme/Default";
import Git from "./Components/Icons/Git.png";
import LD from "./Components/Icons/LD.png";
import Twitter from "./Components/Icons/Twitter.png";
import NewsMock from "./Components/news1.png";
import Unsplash from "./Components/unsplash.mp4";
import Resume from "./Components/Resume.pdf";

class App extends Component {
  constructor() {
    super();
    this.state = {
      particleConfig: Default
    };
  }
  render() {
    return (
      <div className="app">
        <div className="header">
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
          <nav id="navbar">
            <a href="#skills">Skills</a>
            <span>|</span>
            <a href="#projects">Projects</a>
            <span>|</span>
            <a href="#contacts">Contact</a>
            <span>|</span>
            <a href={Resume} target="blank">
              Resume
            </a>
          </nav>

          <div className="header_contents">
            <div className="circular--portrait">
              <img src={avatar} alt="Avatar" />
            </div>

            <h1 className="titleName">Josiah Singh</h1>
            <h4 className="titleDescription">
              Student Developer at Haaga-helia UAS
            </h4>
            <div className="Icons">
              <a
                className="Icon1"
                href="https://github.com/Josiah96singh"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Git} width="30px" alt="img" />
              </a>
              <a
                className="Icon2"
                href="https://twitter.com/josiahernest?lang=en"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={Twitter} width="30px" alt="img" />
              </a>
              <a
                className="Icon3"
                href="https://www.linkedin.com/in/josiah-ameet-singh-59398611b/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={LD} width="32px" alt="img" />
              </a>
            </div>
            <div className="Line" />
            <div className="intro">
              <p>
                Passionate about web/mobile development and building great
                digital experiences. I'm currently pursuing a Bachelors degree
                in Business Information Technology.
              </p>
              <p>
                I strive for <b>Fast</b>, {""}
                <b>Responsive</b>, {""}
                <b>Intuitive</b> {""}& {""}
                <b>Dynamic</b> solutions while constantly learning to write and
                maintain <b>clean code</b>.
              </p>
              <p>
                Currently looking for a developer position in <b>Finland</b> to
                boost my experience and development skills.
              </p>
            </div>
          </div>
        </div>

        <div className="content">
          <div id="skills" className="skills_content">
            <h1>Skills</h1>
            <h4>Languages</h4>
            <p>JavaScript | Java | HTML | CSS</p>
            <h4>Frontend</h4>
            <p>React | React Native | jQuery </p>
            <h4>Backend</h4>
            <p>Node | Express | Spring | SQL </p>
          </div>

          <div id="#" className="projects_content">
            <h1>Projects</h1>
            <p>
              A list of recent projects I've been working on like mobile
              apps,websites and design prototypes. More on{" "}
              <a
                className="projects_a"
                href="https://github.com/Josiah96singh"
                target="_blank"
                rel="noreferrer noopener"
              >
                <b>github</b>
              </a>
            </p>
            <div id="projects" className="grouped_projects">
              <div className="projects">
                <h2> News App</h2>
                <p>#reactnative #firebase</p>
                <a href="https://expo.io/@josiahsingh/newsapp" target="blank">
                  <img src={NewsMock} alt="newsimg" />
                </a>
              </div>
              <div className="projects">
                <h2> Unsplash Clone</h2>
                <p>#react</p>
                <a href="http://unsplash-js-react.surge.sh" target="blank">
                  <video autoPlay loop muted playsInline>
                    <source src={Unsplash} type="video/webm" />
                  </video>
                </a>
              </div>
            </div>
          </div>

          <div id="contacts" className="contact">
            <a
              href="mailto:Josiahsingh1996@gmail.com?Subject=Hello"
              target="_top"
            >
              Contact
            </a>
            <p>Have questions or want to work together?</p>

            <div className="Line" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
