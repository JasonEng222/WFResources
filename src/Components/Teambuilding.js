import { Link } from "react-router-dom"
import "./Components.css"
const Teambuilding = (
<div>
    <h1 className="App-header">Teambuilding </h1>
    <div className="App-verticalLinks"> 
    <div className="guide"></div>
    <div className="X-Guide"></div>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://docs.google.com/document/d/1gYmIxasPHNfpySt_cl6UEryHsXflCVryjHjBBO1BsE0/edit"
        target="_blank"
        rel="noopener noreferrer">
        Why Teams Work
    </a>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://docs.google.com/document/d/11kTwtdGQSncZkdT1aDUSHNGBJfG6nCgtA5i49LDBYzo/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
        Team Archetypes
    </a>
    <Link 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        to={`/XBianca`}>
            XBianca
    </Link>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://discord.com/channels/646623094269673492/650900745024962581/1009013550372618312"
        target="_blank"
        rel="noopener noreferrer">
        XBianca Discord Link
    </a>
    <Link 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        to={`/ARegis`}>
        ARegis
    </Link>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://discord.com/channels/646623094269673492/650900769708441611/1002473926384951369"
        target="_blank"
        rel="noopener noreferrer">
        Aregis Discord Link 
    </a>
  </div>
</div>)

export default Teambuilding