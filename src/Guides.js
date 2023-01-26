// import {connect} from "react-redux"
// import { , Link } from "react-router-dom";
import React, { Component } from "react";
import CSBPatch from './Components/CSBPatch'
import CSBYozora from './Components/CSBYozora'
import ELEGuide from './Components/ELEGuide';
import MISCGuides from './Components/MISCGuides';
import Teambuilding from './Components/Teambuilding';

class UnconnectedGuides extends Component { 
    render = () => {
        return <div className="App">
        <div className='.App-navbar-mini'>
          World Flipper Resources
        </div>
        <div className=''>
          <h1 className="App-header">Solo Boss Challenge Guides</h1>
          <h4>DISCLAIMER: They are not optimized for Coop Contents. Please do not bring them to public lobbies/bells.</h4>
          <div className="App-Links-Horizontal">
            {CSBPatch}
            {CSBYozora}
          </div>
        </div>
        <div>
          <h1 className="App-header">Miscellaneous</h1>
            <div className="App-Links-Horizontal">
            {ELEGuide}
            {Teambuilding}
            {MISCGuides}
          </div>
        </div>
      </div>
    }
}

// let Guides = connect()(UnconnectedGuides)
export default UnconnectedGuides