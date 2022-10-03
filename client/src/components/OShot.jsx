import React from 'react'

const OShot = props => {

 
  return (
    <div className='OShotInfo-Container'>
     
      <header className='TextOveImg'>
        <picture>
            <source media='(min-width: 1100px)' srcset="/img/assets/OshotBannerDesktop.png"/>
                <img src="/img/assets/OshotBannerMobile.png" alt="" />
            </picture>
        <h1>The O-Shot®</h1>

      </header>

      <main>
        <section>
          <img src="/img/assets/OshotSection1Img.png" alt="" />
          <div>
            <h2>Are You A Woman Struggling With Urinary Incontinence or Decreased Sexual Function?</h2>
            <p>
            The <a href="https://oshot.info/">Orgasm Shot® (O-Shot®)</a> procedure is a treatment using platelet-rich plasma (PRP) from your own blood to rejuvenate the vagina to help relieve women with urinary incontinence and decreased sexual function or sex problems.
            </p>
            <p>​Visit <a href="https://oshot.info/">https://oshot.info/</a> to learn more about this great treatment and get in touch with Jamie to book your spot.
            </p>
          </div>
        </section>
        <section>

          <div>
          <h2>What can the O-Shot® help treat?</h2>
          <p>The O-Shot® can help treat a plethora of symptoms including but not limited to:</p>

          <ul>
            <li>Decreased libido (sex drive)</li>
            <li>Stress urinary incontinence</li>
            <li>Dryness (with resulting painful intercourse) from Menopause or from Breast Cancer Treatment</li>
            <li>Decreased ability to orgasm</li>
            <li>Urge urinary incontinence</li>
            <li>Lichen sclerosus</li>
            <li>Lichen planus</li>
            <li>Postpartum fecal incontinence</li>
            <li>Chronic pain from trauma from child birth (episiotomy scars)</li>
            <li>Chronic pain from mesh</li>
            <li>Chronic interstitial cystitis</li>
          </ul>
          </div>
        <img src="/img/assets/OshotSection1Img2.png" alt="" />

        </section>

      
      </main>


      <footer>
          <h2>The O-Shot® FAQ</h2>
          <section className='alignEnd'>
            <h3>IS THERE A RECOVERY TIME?</h3>
            <p>The great thing about the O-Shot® is that there is NO DOWNTIME after the procedure. You are free to resume your daily activities.</p>

            <h3>HOW LONG UNTIL I SEE RESULTS?</h3>
            <p>Some women report function improvement within DAYS of getting the O-Shot®! However, the full effects of the O-Shot® will be most noticeable after 3 months of getting the O-Shot®. </p>

            <h3>HOW LONG DOES THE O-SHOT® LAST?</h3>
            <p>The effects of the O-Shot® are reported to last around 1 to 4 years. Many women opt to repeat the procedure after the effects have worn.</p>

      
          </section>

          <section>
            <h3>DOES IT HURT?</h3>
            <p>Most women are comfortable with the procedure and only report a mild pinch. The numbing may last for 30-60 minutes afterwards.</p>

            <h3>WILL I NEED A SECOND SHOT?</h3>
            <p>It is possible some women may choose a second shot for many reasons. It can be done 8 weeks after the first one if desired.</p>

            <h3>CAN I HAVE THE O-SHOT® IF I AM MENSTRUATING?</h3>
            <p>Yes! The O-SHOT® can be done at any time in a woman’s cycle.</p>

            <h3>WHEN CAN I RESUME SEXUAL ACTIVITY?</h3>
            <p>Anytime! Even the same day if you prefer.</p>
          </section>

        <a href="https://calendly.com/redamounir">Book Your Spot Now!</a>

        </footer>

    </div>
  )
}


export default OShot