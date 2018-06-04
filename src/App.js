import React, { Component } from 'react';
import NovvumLogoWebclip from './NovvumLogoWebclip.png';
import './App.css';
import MediaCard from './MediaCard'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={NovvumLogoWebclip} className="App-logo" id="mol1" alt="logo" />
          <img src={NovvumLogoWebclip} className="App-logo" id="mol2" alt="logo" />
          <img src={NovvumLogoWebclip} className="App-logo" id="mol3" alt="logo" />
          <img src={NovvumLogoWebclip} className="App-logo" id="mol4" alt="logo" />
          <img src={NovvumLogoWebclip} className="App-logo" id="mol5" alt="logo" />
          
          <h1 className="App-title">Welcome to Novvum!!</h1>
        </header>
        <div className="yes">
        <div className="App-intro">
          <MediaCard name="Business Development - Hunjting" image="https://spaceplace.nasa.gov/planets-round/en/jupiter.jpg" description="Hello! This is a description."/>
          <MediaCard name="Business Development - Fishing" image="https://spaceplace.nasa.gov/planets-round/en/jupiter.jpg" description="Hello! This is a description."/>
          <MediaCard name="Content Creation" image="https://78.media.tumblr.com/dc55878569104934bcc40c5a4099e0cc/tumblr_inline_p9k71wnVKm1tzhl5u_1280.jpg"/>
          <MediaCard name="Financial - Controls and Goals" image="https://78.media.tumblr.com/dc55878569104934bcc40c5a4099e0cc/tumblr_inline_p9k71wnVKm1tzhl5u_1280.jpg"/>
          <MediaCard name="Administrate and Operate" image="https://78.media.tumblr.com/dc55878569104934bcc40c5a4099e0cc/tumblr_inline_p9k71wnVKm1tzhl5u_1280.jpg"/>
          <MediaCard name="People Operations" image="https://78.media.tumblr.com/dc55878569104934bcc40c5a4099e0cc/tumblr_inline_p9k71wnVKm1tzhl5u_1280.jpg"/>
          <MediaCard name="Internal At-Bats" image="https://78.media.tumblr.com/dc55878569104934bcc40c5a4099e0cc/tumblr_inline_p9k71wnVKm1tzhl5u_1280.jpg"/>
          
        </div>
        </div>
        
      </div>
    );
  }
}

export default App;
