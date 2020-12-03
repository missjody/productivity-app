import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from 'gsap';

const HomePage = () => {


  return (
    <div>

      <div className="row justify-content-md-center" >
      

        <div className="col s12 m3 xl3"></div>
        <div className="col s12 m6 xl6">
          <h3 className=" text-center">
            Taking your productivity to the next step, one task at a time
          </h3>
          <h1 className=" text-shadow-pop-bl text-center" >Welcome to Surată</h1>

        </div>
        <div className="col s12 m3 xl3"></div>
      </div>
      {/* </div > */}





      {/* ////////////////////////////////////////////// */}

      <div className="row" id="bkgOne">
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <h1 className="text-shadow-pop-bl">My Goals</h1>
          <h4>Break down your goals into easy to accomplish tasks.</h4>
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <img src="./images/hand.png" className="circle responsive-img"
            alt="Hand writing a todo list." />
        </div>

        {/* </div> */}
      </div>

      <div className="row" id="bkgTwo" >
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <img className="circle responsive-img" src="./images/calendar.png"
            alt="screen shot of calendar" />
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <h1 className="text-shadow-pop-bl">My Plan</h1>
          <h4>Visualize your tasks using a built in calendar.</h4>
        </div>
        {/* </div> */}
      </div >

      <div className="row" id="bkgThree" >
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <h1 className="text-shadow-pop-bl">My Time</h1>
          <h4>Keep track of your time using the Pomodoro technique.</h4>
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <img src="./images/keyboard.png" className="circle responsive-img"
            alt="NEED ALT HERE." />
        </div>

        {/* </div> */}
      </div>

      <div className="row">
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin ">
          <img src="./images/soul1.png" className="circle responsive-img"
            alt="woman meditating" />
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <h1 className="text-shadow-pop-bl">My Soul</h1>
          <h4>Don't forget: take time for yourself, just to breathe.</h4>
        </div>
        {/* </div> */}
      </div >

    </div >

    // </div >

  )

}

export default HomePage;