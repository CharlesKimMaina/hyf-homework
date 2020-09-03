import React from "react";
import { Profile } from "./Components/Profile";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import UserRouter from "./Components/UserRouter";
import { About } from "./Components/About";

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">
          <h1>Home</h1>
        </Link>

        <Link to="/about">
          <h1>About</h1>
        </Link>
      </nav>
      <Switch>
        <div>
          <Route exact path="/">
            <UserRouter />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path={"/:userName"}>
            <Profile />
          </Route>
        </div>
      </Switch>
    </Router>
  );
}
