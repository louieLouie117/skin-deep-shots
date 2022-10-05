import './App.css';
import LandingPage from './views/LandingPage';
import {Router} from "@reach/router"
import { useState } from 'react'

import PShot from './components/PShot';
import OShot from './components/OShot';
import NavMenu from './components/NavMenu';
import Menu from './components/Menu'
import Footer from './components/Footer';
// import ContactOptions from './components/ContactOptions';


function App() {

  const [mainMenu, setMainMenu] = useState(false);

  const MenuHandler = (e) => {
    console.log("Nav Handler was called",e)
    if(mainMenu === false){
      setMainMenu(true)
      return
    }
    if(mainMenu === true){
      setMainMenu(false)

    }

  }

  return (
    <div className="App">
      

      <NavMenu  MenuHandler={MenuHandler}></NavMenu>
      <div style={{ display: mainMenu ? "grid": "none"}}>
          <Menu MenuHandler={MenuHandler}></Menu>
        </div>

      {/* <ContactOptions></ContactOptions> */}
      <Router>
        <LandingPage path="/"/>
        <PShot path="p-shot-for-men"/>
        <OShot path="o-shot-for-women"/>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;


