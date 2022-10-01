import React from 'react'
// import {Link} from "@reach/router"

const Services = props => {
  return (
    <div className='ShotServices-Container'>
        <header>
        <h1>O-shot® and P-shot®</h1>
        <p>The O-shot® and P-shot® are highly effective treatments for both men and women to treat sexual dysfunction and urinary incontinence.</p>
        {/* <button>The O-shot® For Women</button> */}
        {/* <button>The P-shot® For Men</button> */}
        <a href="/o-shot-for-women">The O-Shot® For Women</a>
        <a href="/p-shot-for-men">The P-Shot® For Men</a>

        {/* <Link to="p-shot-for-men">P-shot® For Men</Link> */}

        </header>
        <aside>
            <picture>
            <source media='(min-width: 1100px)' srcset="/img/assets/OPshotImgDesktop.png"/>
                <img src="/img/assets/OPshotImgMobile.png" alt="" />
            </picture>
        </aside>



    </div>
  )
}


export default Services