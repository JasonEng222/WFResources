import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux"
import './App.css';
import XBianca from './Components/XBianca';
import { BrowserRouter, createBrowserRouter, Route, RouterProvider, Routes, Link } from "react-router-dom";
// import { , Link } from "react-router-dom";
import store from './Store.js'
import Guides from './Guides.js';


const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Homepage <Link to={`/Guides`}>Guides</Link></div>, 

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
    element: <div>ARegis <Link to={`/ARegis`}>Guides</Link></div>, 

  },
]);


const App = () => {
    return (
      <RouterProvider router={router} />
        // <BrowserRouter>
        //   <Routes>
        //     <Route exact={true} path="/" component={Guides}></Route>
        //   </Routes>
        // </BrowserRouter>
      );
    }

   
export default App