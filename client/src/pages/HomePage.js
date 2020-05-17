import React, { useRef, useEffect } from "react";
import { TweenMax, TimelineLite, Power3 } from 'gsap';


const HomePage = () => {
  let app = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: .8 });

  useEffect(() => {
    const headlineFirst = content.children;
    console.log("CONTENT CHILDREN", content.children)

    TweenMax.to(app, 0, { css: { visibility: "visible" } })

    tl.staggerFrom([headlineFirst], 1, { y: 80, ease: Power3.easeIn, delay: .8 });

  }, [tl]);

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
    <div>
      <div className="row" ref={el => app = el}>
        <div ref={el => content = el}>
          <div className="col s12 m6 xl6 right-align ">
            <img src="./images/Surata.png" class="circle" id="surata"
              alt="Image of the Surata app's mascot, Little Sister. She has a high brown bun, large green eyes, blushing cheeks and a sweet blue sweater." />
          </div>

          <div className="col s12 m6 xl6 left-align ">
            <h1>Welcome to Surată</h1>
            <h5 className="indent">The productivity app you've been waiting for.</h5>
          </div>
        </div>
      </div >


      <div className="row" id="bkgOne" >
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <h1>My Goals</h1>
          <h4>Break down your goals into easy to accomplish tasks.</h4>
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <img src="./images/hand.png" class="circle home-image"
            alt="Hand writing a todo list." />
        </div>

        {/* </div> */}
      </div>

      <div className="row" id="bkgTwo" >
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <img class="circle home-image" src="./images/cal.png"
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
          <img src="./images/keyboard.png" class="circle home-image"
            alt="NEED ALT HERE." />
        </div>

        {/* </div> */}
      </div>

      <div className="row">
        {/* <div ref={el => content = el}> */}
        <div className="col s12 m6 xl6 right-align home-margin">
          <img src="./images/soul1.png" class="circle home-image"
            alt="woman meditating" />
        </div>

        <div className="col s12 m6 xl6 left-align home-margin">
          <h1>My Soul</h1>
          <h4>Don't forget: take time for yourself, just to breathe.</h4>
        </div>
        {/* </div> */}
      </div >



    </div>

  )

}

export default HomePage;