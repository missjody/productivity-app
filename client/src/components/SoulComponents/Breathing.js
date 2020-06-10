import React from "react";
// , { useRef, useEffect } 
//gsap imports
// import { TimelineMax, Power0 } from "gsap";



const Breathing = (props) => {

  // let breathing = useRef(null);

  let status = props.playStatus == "PLAYING";


  // useEffect(() => {
  //   const b = breathing;
  //   const tl = new TimelineMax({ repeat: -1, repeatDelay: 2 });
  //   tl.to(b, 3, { opacity: 1, scale: 4, ease: Power0.ease, repeat: 1, yoyo: true, paused: false }); //paused: true
  // }, []);


  return (
    < div >
      {/* heroku not updating with gsap animations */}
      {/* ref={el => breathing = el} */}
      < div id="breathCircle" style={status ? { display: "block" } : { display: "none" }}></div >
    </div >
  )

}

export default Breathing; 