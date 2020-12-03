import React from "react";
// import { Col, Row, Container } from "../Grid";
// import Jumbotron from "../Jumbotron";
import Login from "../Login"


function NoAuth() {
    return (
        <div>
            {/* <h1 id="noAuth">Please Login or Signup!!</h1> */}
            <Login />
        </div>
    )
}

export default NoAuth;
