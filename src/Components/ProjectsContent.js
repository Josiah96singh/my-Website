import React from 'react'

import NewsMock from "./Resources/Media/news1(gimp).png";
// import Unsplash from "./Resources/Media/unsplash.mp4";
import Unsplash1 from "./Resources/Media/unsplash.webm";

export default function ProjectsContent() {
    return (
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
                <a href="https://expo.io/@josiahsingh/news-app" target="blank">
                  <img src={NewsMock} alt="newsimg" />
                </a>
              </div>
              <div className="projects">
                <h2> Unsplash Clone</h2>
                <p>#react</p>
                <a href="http://unsplash-js-react.surge.sh" target="blank">
                  <video autoPlay loop muted playsInline>
                    <source src={Unsplash1} type="video/webm" />
                  </video>
                </a>
              </div>
            </div>
          </div>
    )
}
