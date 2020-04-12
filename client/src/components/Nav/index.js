import React, { useContext } from "react";
import { Link , Redirect} from "react-router-dom"
import userContext from '../../utils/userContext'

function Nav() {
  const { user, goals } = useContext(userContext);
  console.log(goals)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">
        {user ? `Hi ${user.username}, Welcome To ` : ""} Surată
      </Link>
      <ul className="right hide-on-med-and-down">
        <li><Link to="/goals">My Goals</Link></li>
        <li><Link to="/calendar">My Plan</Link></li>
        <li><Link to="/pomodor">My Time</Link></li>
        <li><Link to="/mysoul">My Soul</Link></li>
        <li><Link to="#">My Food</Link></li>
        <li><Link to="/signup" >{user ? 'Log Out' : 'Sign Up/Log In'}</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
