import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import ARegis from './Components/ARegis';
import XBianca from './Components/XBianca';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, Link } from "react-router-dom";
// import { , Link } from "react-router-dom";
import store from './Store.js'
import Guides from './Guides.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div> 
      <Link to={`/Guides`}>Guides</Link>
      </div> 
  },
  {
    path: "/Guides",
    element: <Guides></Guides>
  },
  {
    path: "/XBianca",
    element: <div>{XBianca}</div>, 

  },
  {
    path: "/ARegis",
    element: <div>{ARegis}</div>, 

  },
]);


const App = () => {
    return (
      <RouterProvider router={router} />
      );
    }

   
export default App