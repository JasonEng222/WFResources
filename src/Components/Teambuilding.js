import { Link } from "react-router-dom"
import "./Components.css"
const Teambuilding = (
<div className="Vertical-Link">
    <h1 className="App-header">Teambuilding</h1>
    <div className="App-verticalLinks"> 
    <div className="X-Guide">Patch's Guides</div>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://docs.google.com/document/d/17SSZIjnNjZnhDyYtJzhzNlEm_BBs_X0QyKQ7_xLYgg4/edit"
        target="_blank"
        rel="noopener noreferrer">
        Why Teams Work
    </a>
    <Link 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.85"}}
        to={`/XBianca`}>
            XBianca
    </Link>
    <Link 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        to={`/ARegis`}>
        ARegis
    </Link>
    <div>-------------------------- </div>
    <div className="X-Guide">Element and Mirilion's Guide</div>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://docs.google.com/document/d/11kTwtdGQSncZkdT1aDUSHNGBJfG6nCgtA5i49LDBYzo/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer">
        Team Archetypes
    </a> 
    <div>-------------------------- </div>
    <div className="X-Guide">Discord Links</div>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://discord.com/channels/646623094269673492/650900745024962581/1009013550372618312"
        target="_blank"
        rel="noopener noreferrer">
        XBianca 
    </a>
    <a 
        className="App-link"
        style={{color: "rgba(151, 11, 11, 0.86"}}
        href="https://discord.com/channels/646623094269673492/650900769708441611/1002473926384951369"
        target="_blank"
        rel="noopener noreferrer">
        Aregis  
    </a>
  </div>
</div>)

export default Teambuilding