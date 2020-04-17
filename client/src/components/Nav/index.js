import React, { useEffect, useRef, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import M from "materialize-css/dist/js/materialize.min.js";
import userContext from '../../utils/userContext';
import API from "../../utils/API";

const Nav = (props) => {
  const { user, goals } = useContext(userContext);
  console.log(goals)
  const handleLogout = () => {
    API.logout().then(res => {
      window.location.assign("/");
    });
  };
  // console.log("Propsuser: ", props.username)
  // ${user.username}

  let slide = useRef(null);

  useEffect(() => {
    let sidenav = slide;
    console.log("SLIDE ", sidenav)
    M.Sidenav.init(sidenav, {});
  })


  return (
    <div>

      <nav>
        <div className="nav-wrapper">
          <a href="#" data-target="slide-out" className="sidenav-trigger show-on-med"><i className="material-icons">menu</i></a>
          <a href="#!" class="brand-logo" to="/">
            {user ? `Hi ${user.username}, Welcome To ` : ""} Surată
          </a>

          <ul className="right hide-on-med-and-down active">
            <li><Link to="/goals">My Goals</Link></li>
            <li><Link to="/calendar">My Plan</Link></li>
            <li><Link to="/pomodor">My Time</Link></li>
            <li><Link to="/mysoul">My Soul</Link></li>
            {/* <li><Link to="#">My Food</Link></li> */}
            {props.isLoggedIn ? (<li><a className="nav-link" onClick={handleLogout}>Logout</a></li>) : (<li><Link to="/signup" >Sign Up/Log In</Link></li>)}
          </ul>
        </div>
      </nav>

      <ul className="sidenav right" ref={el => slide = el} id="slide-out">
        <li><Link to="/goals">My Goals</Link></li>
        <li><Link to="/calendar">My Plan</Link></li>
        <li><Link to="/pomodor">My Time</Link></li>
        <li><Link to="/mysoul">My Soul</Link></li>
        {props.isLoggedIn ? (<li><a className="nav-link" onClick={handleLogout}>Logout</a></li>) : (<li><Link to="/signup" >Sign Up/Log In</Link></li>)}
      </ul>
    </div>
  );
}

export default Nav;

//           <div className="nav-wrapper">
//             <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
//             <ul className="right hide-on-med-and-down">
//               <li><a href="/home"><h5> Go Back</h5></a></li>
//               <li><a href="/projects"><h5>Projects</h5></a></li>
//               <li><a href="/contact"><h5> Reach Out</h5></a></li>
//             </ul>
//           </div>
//         </nav>

//         <ul className="sidenav right" id="slide-out">
//           <li><a href="/home"><h5> Go Back</h5></a></li>
//           <li><a href="/projects"><h5>Projects</h5></a></li>
//           <li><a href="/contact"><h5> Reach Out</h5></a></li>
//         </ul>
//       </div>
//     );

//   }
// }

// export default Nav;


// What I took out at 751 4/15

// <div>

// <nav>
//   <div className="navbar navbar-expand-lg navbar-dark bg-primary">
//     <a href="#" data-target="slide-out" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>

//     <Link className="navbar-brand" to="/">
//       {user ? `Hi ${user.username}, Welcome To ` : ""} Surată
//   </Link>
//     <ul className="right hide-on-med-and-down active">
//       <li><Link to="/goals">My Goals</Link></li>
//       <li><Link to="/calendar">My Plan</Link></li>
//       <li><Link to="/pomodor">My Time</Link></li>
//       <li><Link to="/mysoul">My Soul</Link></li>
//       {/* <li><Link to="#">My Food</Link></li> */}
//       {props.isLoggedIn ? (<li><a className="nav-link" onClick={handleLogout}>Logout</a></li>) : (<li><Link to="/signup" >Sign Up/Log In</Link></li>)}
//     </ul>
//   </div>
// </nav>

// <ul className="sidenav right" ref={el => slide = el}>
//   <li><Link to="/goals">My Goals</Link></li>
//   <li><Link to="/calendar">My Plan</Link></li>
//   <li><Link to="/pomodor">My Time</Link></li>
//   <li><Link to="/mysoul">My Soul</Link></li>
// </ul>
// </div>

