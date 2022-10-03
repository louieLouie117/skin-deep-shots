import React from 'react'



const NavMenu = ({MenuHandler}) => {

  

  
  return (
    <div >
     
     <nav className='MainNavMenu'>
          <img src="/img/assets/MenuIcon.png" alt="" onClick={ MenuHandler} />
          <img src="/img/assets/LogoImg.png" alt=""  />
        </nav>
    </div>
  )
}


export default NavMenu