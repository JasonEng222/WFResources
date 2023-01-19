import './App.css';
import CSBPatch from './Components/CSBPatch'
import CSBYozora from './Components/CSBYozora'
import ELEGuide from './Components/ELEGuide';
import MISCGuides from './Components/MISCGuides';

function App() {
  return (
    <div className="App">
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
        <h1 className="App-header">Elemental Team Guides</h1>
          <div className="App-Links-Horizontal">
          {ELEGuide}
          {MISCGuides}
        </div>
      </div>
    </div>
  );
}
export default App;