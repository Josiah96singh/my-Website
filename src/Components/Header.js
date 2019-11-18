import React from 'react'

/* Image Imports */
import Avatar from "./Resources/Media/Pic(gimp).jpg";
import Git from "./Resources/Icons/Git.png";
import LD from "./Resources/Icons/LD.png";
import Twitter from "./Resources/Icons/Twitter.png";

export default function Header() {
    return (
        <div className="header_contents">
            <div className="circular--portrait">
              <img src={Avatar} alt="Avatar" />
            </div>

            <h1 id="titleName" className="titleName">
              Josiah Singh
            </h1>
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
    )
}
