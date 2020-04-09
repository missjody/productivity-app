import React, { useContext } from "react";
import userContext from '../../utils/userContext'

function Nav() {
  const { user } = useContext(userContext)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        {user ? `Hi ${user.username}, Welcome To ` : ""} Surată
      </a>
      <ul className="right hide-on-med-and-down">
        <li><a href="/goals">My Goals</a></li>
        <li><a href="#">My Plan</a></li>
        <li><a href="/pomodor">My Time</a></li>
        <li><a href="/mysoul">My Soul</a></li>
        <li><a href="#">My Food</a></li>
        <li><a href="/signup">{user ? 'Log Out' : 'Sign Up/Log In'}</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
