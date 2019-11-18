import React from 'react'
import Resume from "./Resume.pdf";

export default function Nav() {
    return (
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
    )
}
