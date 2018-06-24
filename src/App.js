import React, { Component } from 'react';
import './App.css';
import avatar from './Components/Pic.jpg'
import Particles from 'react-particles-js';
import  Bubble  from './Components/Theme/Bubble';
import  Default  from './Components/Theme/Default';
import Git from './Components/Icons/Git.png';
import Instagram from './Components/Icons/Instagram.png';
import FB from './Components/Icons/FB.png';
import LD from './Components/Icons/LD.png';

class App extends Component {
  constructor() {
    super();
    this.state = { particleConfig: Default };
  }
  render() {
    return (
      <div className="App">
      <div className="Header">
      <img className="pic" src={avatar} alt='Avatar'/>
      <h1 className="TitleName">Josiah Singh</h1>
      <h4 className="TitleDescription">Student Developer at Haaga-helia UAS</h4>
      <div className="Icons">
      <a className="Icon1" href="https://github.com/Josiah96singh"  target="_blank"><img src={Git} width="30px"/></a>
      <a className="Icon2" href="https://www.instagram.com/josiahsingh/"  target="_blank"><img src={Instagram} width="30px"/></a>
      <a className="Icon3" href="https://www.linkedin.com/in/josiah-ameet-singh-59398611b/"  target="_blank"><img src={LD} width="32px"/></a>
      </div>
      </div>
      <div className="Body"> 
      <div className="BodyTopics">
      <h2>About</h2>
      <p>A student developer passionate about creating digital services to enrich the lives of people.</p>
      </div>
      </div>
      <Particles 
            params={this.state.particleConfig}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          />
      </div>
    );
  }
}

export default App;
