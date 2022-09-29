import React from 'react'

const Menu = ({MenuHandler}) => {


  return (
    <div className='MenuContainer'>
        <ul>
            {/* <li>Home</li> */}
            <li onClick={MenuHandler}>
              <a href="https://purple-mud-01dbaa810.2.azurestaticapps.net/">Home</a>
            </li>
            <li>
            <a href="https://calendly.com/redamounir">Book Your Spot Today</a>
              
            </li>
            <li>
            <a href="mailto:skindeep.jamie@gmail.com?subject=&body=Hello, Jamie">Contact Us</a>

            </li>
            {/* <li>About Skin Deep</li> */}
            <li onClick={MenuHandler}>More Health Services</li>
        </ul>
    </div>
  )
}


export default Menu