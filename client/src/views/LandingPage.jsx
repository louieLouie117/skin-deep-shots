import React from 'react'
import Menu from '../components/Menu'
import LandingPageStyles from '../modules/LandingPageStyles.css'

import { useState } from 'react'
import Footer from '../components/Footer'
import Services from '../components/Services'




const LandingPage = props => {

  <LandingPageStyles></LandingPageStyles>

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
    <div className='LandingPageContainer'>

        {/* <NavMenu></NavMenu> */}

        <nav className='MainNavMenu'>
          <img src="/img/assets/MenuIcon.png" alt="" onClick={(e)=> MenuHandler(e)} />
          <img src="/img/assets/LogoImg.png" alt="" />
        </nav>

        <div style={{ display: mainMenu ? "grid": "none"}}>
          <Menu MenuHandler={MenuHandler}></Menu>
        </div>

        <Services></Services>


        <Footer></Footer>
    </div>
  )
}


export default LandingPage