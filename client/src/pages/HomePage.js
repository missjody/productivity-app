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

    tl.staggerFrom([headlineFirst], 1, { y: 1250, ease: Power3.easeOut, delay: .8 });

  }, [tl]);

  return (
    <div className="row" ref={el => app = el}>
      <div ref={el => content = el}>

        <div className="col s-12 m-9">
          <h4 id="homeText">
            Welcome to Surată! Your new little helper. <br /><br />
        Here you can keep track of your Goals and break each goal down into Tasks.<br /><br />
        Keep track of due dates with your Plan page, a calendar displaying your task todos.<br /><br />
        Don't forget to take care of yourself on the My Soul portion, where you can take a moment to meditate to a desired sound track.<br /><br />
          </h4>
          <div className="col s-12 m-6">
            <img src="./images/Surata.png" className="responsive-img" id="homeImage"
              alt="Image of the Surata app's mascot, Little Sister. She has a high brown bun, large green eyes, blushing cheeks and a sweet blue sweater." />
          </div >
        </div >
      </div>
    </div>


  )

}

export default HomePage;