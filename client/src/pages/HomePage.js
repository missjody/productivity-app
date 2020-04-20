import React from "react";
// import { Row } from "../components/Grid";


const HomePage = () => {

  return (
    <div className="row">
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


  )

}

export default HomePage;