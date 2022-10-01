import './App.css';
import LandingPage from './views/LandingPage';
import {Router} from "@reach/router"
import PShot from './components/PShot';
import OShot from './components/OShot';

function App() {
  return (
    <div className="App">

      <Router>
        <LandingPage path="/"/>
        <PShot path="p-shot-for-men"/>
        <OShot path="o-shot-for-women"/>
      </Router>
    </div>
  );
}

export default App;
