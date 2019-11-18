import React, { Component } from 'react'
import Particles from "react-particles-js";
import Default from "./Resources/Theme/Default";

export default class ParticlesView extends Component {
    constructor() {
        super();
        this.state = {
          particleConfig: Default
        };
      }

    render() {
        return (
            <>
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
            </>
        )
    }
}
