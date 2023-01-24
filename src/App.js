import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
// import { , Link } from "react-router-dom";
import store from './Store.js'
import Guides from './Guides.js';

class UnconnectedApp extends Component {
  render = () => {
    return (
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Guides}></Route>
          </div>
        </BrowserRouter>
      );
    }
}
    
let App = connect()(UnconnectedApp)
export default App