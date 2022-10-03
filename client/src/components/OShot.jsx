import React from 'react'
import Menu from './Menu'
import NavMenu from './NavMenu'

const OShot = props => {

 
  return (
    <div>
      <nav>
        {/* <Menu></Menu> */}
      </nav>
      <header>
        <h1>The O-Shot®</h1>
        <picture>
            <source media='(min-width: 1100px)' srcset="/img/assets/OPshotImgDesktop.png"/>
                <img src="/img/assets/OPshotImgMobile.png" alt="" />
            </picture>
      </header>


    </div>
  )
}


export default OShot