import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import { Mac, iPad, iPhone, Watch, TV, Music, Support } from "./component";
import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <img
              src="http://pngimg.com/uploads/apple_logo/apple_logo_PNG19670.png"
              alt="apple logo"
            />
            <NavLink to="/Mac" activeClassName="activelink">
              Mac
            </NavLink>
            <NavLink to="/iPad" activeClassName="activelink">
              iPad
            </NavLink>
            <NavLink to="/iPhone" activeClassName="activelink">
              iPhone
            </NavLink>
            <NavLink to="/Watch" activeClassName="activelink">
              Watch
            </NavLink>
            <NavLink to="/TV" activeClassName="activelink">
              TV
            </NavLink>
            <NavLink to="/Music" activeClassName="activelink">
              Music
            </NavLink>
            <NavLink to="/Support" activeClassName="activelink">
              Support
            </NavLink>
            <img
              src="http://www.apple.com/ac/globalnav/4/en_US/images/globalnav/search/image_large.svg"
              alt="search"
            />
            <img
              src="http://www.apple.com/ac/globalnav/4/en_US/images/globalnav/bag/image_large.svg"
              alt="bag"
            />
          </nav>
        </header>
        <Route path="/Mac" />
        <Route path="/iPad" />
        <Route path="/iPhone" />
        <Route path="/Watch" />
        <Route path="/TV" />
        <Route path="/Music" />
        <Route path="/Support" />
      </div>
    );
  }
}

export default App;
