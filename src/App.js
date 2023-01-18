import './App.css';
import CSBPatch from './Components/CSBPatch'
import CSBYozora from './Components/CSBYozora'
import ELEGuide from './Components/ELEGuide';

function App() {
  return (
    <div className="App">
      <div className='.App-navbar-mini'>
        World Flipper Resources
      </div>
      <div className=''>
        <h1 className="App-header">Solo Boss Challenge Guides</h1>
        <h3>DISCLAIMER: They are not optimized for Coop Contents. Please do not bring them to public lobbies/bells.</h3>
        <div className="App-Links-Horizontal">
          {CSBPatch}
          {CSBYozora}
        </div>
      </div>
      <div>
        <h1 className="App-header">Elemental Team Guides</h1>
          <div className="App-Links-Horizontal">
          {ELEGuide}
        </div>
      </div>
    </div>
  );
}
export default App;