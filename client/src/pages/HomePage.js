import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from 'gsap';

const HomePage = () => {


  return (
    // <div className="row" ref={el => app = el}>
    //   <div ref={el => content = el}>

    //     <div className="col s12 m12 push-m2 xl6 center-align" >
    //       <h4 id="homeText">
    //         Welcome to Surată! Your new little helper. <br /><br />
    //     Here you can keep track of your Goals and break each goal down into Tasks.<br /><br />
    //     Keep track of due dates with your Plan page, a calendar displaying your task todos.<br /><br />
    //     Don't forget to take care of yourself on the My Soul portion, where you can take a moment to meditate to a desired sound track.<br /><br />
    //       </h4>
    //     </div>
    //     <div className="col s12 m6 xl6" >
    //       <img src="./images/Surata.png" className="responsive-img" id="homeImage"
    //         alt="Image of the Surata app's mascot, Little Sister. She has a high brown bun, large green eyes, blushing cheeks and a sweet blue sweater." />
    //     </div >
    //     {/* </div > */}
    //   </div>
    // </div>

    /////////////////////////////////////////////////////////////////

    <div>
      <div className="row" >
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align pull-m1 pull-xl1" >
          <img src="./images/Surata.png" class="circle responsive-img hero-image" id="surata"
            alt="Image of the Surata app's mascot, Little Sister. She has a high brown bun, large green eyes, blushing cheeks and a sweet blue sweater." />
        </div>

        <div className="col s12 m6 xl6 left-align pull-m1 pull-xl1 words">
          <h3 className="text-shadow-pop-bl">
            Taking your productivty
          </h3>
          <h3 className="text-shadow-pop-bl">
            to the next step,
          </h3>
          <h3 className="text-shadow-pop-bl">
            one task at a time
          </h3>
          <h3 className="text-shadow-pop-bl">Welcome to Surată</h3>

        </div>
      </div>
      {/* </div > */}





      {/* ////////////////////////////////////////////// */}

      <div className="row" id="bkgOne">
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <h1>My Goals</h1>
          <h4>Break down your goals into easy to accomplish tasks.</h4>
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <img src="./images/hand.png" class=" home-image responsive-img"
            alt="Hand writing a todo list." />
        </div>

        {/* </div> */}
      </div>

      <div className="row" id="bkgTwo" >
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <img class=" home-image responsive-img" src="./images/cal.png"
            alt="screen shot of calendar" />
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <h1>My Plan</h1>
          <h4>Visualize your tasks using a built in calendar.</h4>
        </div>
        {/* </div> */}
      </div >

      <div className="row" id="bkgThree" >
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <h1>My Time</h1>
          <h4>Keep track of your time using the Pomodoro technique.</h4>
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <img src="./images/keyboard.png" class=" home-image responsive-img"
            alt="NEED ALT HERE." />
        </div>

        {/* </div> */}
      </div>

      <div className="row">
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin responsive-img">
          <img src="./images/soul1.png" class=" home-image"
            alt="woman meditating" />
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <h1>My Soul</h1>
          <h4>Don't forget: take time for yourself, just to breathe.</h4>
        </div>
        {/* </div> */}
      </div >

    </div >

    // </div >

  )

}

export default HomePage;