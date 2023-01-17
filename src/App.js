
import './App.css';
import CSBPatch from './Components/CSBPatch'
import CSBYozora from './Components/CSBYozora'

function App() {
  return (
    <div className="App">
      <div className='.App-navbar-mini'>
        World Flipper Resources
      </div>
      <div className=''>
        <h1 className="App-header">Challenge Solo Boss Guides</h1>
        <div className="App-Links-Horizontal">
          {CSBPatch}
          {CSBYozora}
        </div>
      </div>
      <div>
        <h1 className="App-header">Elemental Team Guides</h1>
        <h2>Fire</h2>
        <h2>Water</h2>
        <h2>Thunder</h2>
        <h2>Wind</h2>
        <h2>Light</h2>
        <h2>Dark</h2>
      </div>
    </div>
  );
}

export default App;
  