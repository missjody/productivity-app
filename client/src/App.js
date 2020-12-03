import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pomodor from "./pages/Pomodor";
import Calendar from "./components/Calendar";
import SignUpLogin from "./components/Login";
import NoMatch from "./pages/NoMatch";
import Goals from "./pages/Goals";
import Nav from "./components/Nav";
import NoAuth from "./components/NoAuth/NoAuth";
import HomePage from "./pages/HomePage";
import Soul from "./pages/Soul";
import userContext from './utils/userContext';
import API from './utils/API';
// import Materialize from 'materialize-css/dist/css/materialize.min.css';

function App() {
  const [user, setUser] = useState();
  const [goals, setGoals] = useState([{ goal: '', Tasks: [] }])
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    API.status()
      .then(res => {
        if (res.data.user) {
          console.log("who are you?", res.data.user)
          setIsLoggedIn(true)
          loadGoals()
        }
      })
      .catch(e => {
        console.log('error', e)
      })
  }, [])

  const loadGoals = () => {
    API.getGoals()
      .then(res => {
        setGoals(res.data)
      })
      .catch(err => console.log(err));
  }
  return (
    <Router>
      <userContext.Provider value={{
        user: user, setUser: setUser, setGoals: setGoals, goals: goals,
        loadGoals: loadGoals, setIsLoggedIn: setIsLoggedIn
      }}>
        <Nav isLoggedIn={isLoggedIn} />
        <div className="page">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route exact path="/signup">
              <SignUpLogin />
            </Route>
            <Route exact path="/pomodor">
              {isLoggedIn ? <Pomodor /> : <NoAuth />}
            </Route>
            <Route exact path="/goals" >
              {isLoggedIn ? <Goals /> : <NoAuth />}
            </Route>
            <Route exact path="/calendar">
              {isLoggedIn ? <Calendar /> : <NoAuth />}
            </Route>
            <Route exact path="/mysoul">
              {isLoggedIn ? <Soul /> : <NoAuth />}
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
          {/* <p className="footer">© Keeley Byerly ✶ Jody Russell ✶ Inbar Shucker 2020</p> */}
        </div>
      </userContext.Provider>
    </Router >
  );
}

export default App;
