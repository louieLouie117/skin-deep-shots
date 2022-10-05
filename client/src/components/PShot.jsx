import React from 'react'

const PShot = props => {
  return (
    <div className='OShotInfo-Container'>
         
      <header className='TextOveImg'>
        <picture>
            <source media='(min-width: 1100px)' srcset="/img/assets/PshotBannerImgDesktop.png"/>
                <img src="/img/assets/PshotBannerImgMobile.png" alt="" />
            </picture>
        <h1>The P-Shot®</h1>


      </header>


      <main>
        <section>
        <img src="/img/assets/PshotSectionImg2.png" alt="" />
          <div>
            <h2>Are You A Man Struggling With ED?</h2>
            <p>
            The <a href="https://oshot.info/">Priapus Shot® (P-Shot®)</a> is a simple, non-surgical procedure that takes about an hour to complete. It is a safe and effective treatment that can improve sexual function. Usually done as a series of three injections. It is most common in treating ED (Erectile Dysfunction) and Peyronie's Disease.
            </p>
            <p>​Visit <a href="https://oshot.info/">https://oshot.info/</a> to learn more about this great treatment and get in touch with Jamie to book your spot.
            </p>
          </div>
        </section>
        <section>

          <div>
          <h2>What can the P-Shot® help treat?</h2>
          <p>The P-Shot® can help treat a plethora of symptoms including but not limited to:</p>

          <ul>
           <li>Decreased sensation and pleasure</li>
           <li>Unable to achieve a full erection</li>
           <li>Difficulty maintaining erection</li>
           <li>Size has decreased with age</li>
           <li>Peyronie's Disease</li>
           <li>Prostate Issues</li>
          </ul>
          </div>
        <img src="/img/assets/PshotSectionImg1.png" alt="" />

        </section>
   
      
      </main>

      <footer>
          <a href="https://calendly.com/skindeep-jamie/30min?month=2022-10">Book Your Spot Now!</a>

        </footer>
    </div>
  )
}


export default PShot