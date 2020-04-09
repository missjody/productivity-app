import React, { useRef, useEffect } from "react";
//gsap imports
import { TimelineMax, Power0 } from "gsap";

import "./soulStyle.css";


const Breathing = () => {

  let breathing = useRef(null);

  useEffect(() => {
    // breathing test
    const b = breathing;
    console.log("did we grab breathing", b)
    const tl = new TimelineMax({ repeat: -1, repeatDelay: 2 });
    tl.to(b, 3, { opacity: 1, scale: 2.5, ease: Power0.ease, repeat: 1, yoyo: true });

  }, []);

  return (
    < div >
      < div id="breathCircle" ref={el => breathing = el}></div >
    </div >

  )

}

export default Breathing; 