import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";

import iPhone from "./component/IPhone";
import Mac from "./component/Mac";
import iPad from "./component/iPad";
import Watch from "./component/Watch";
import Music from "./component/Music";
import TV from "./component/TV";
import Support from "./component/Support";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <img
              src="https://apple.com/ac/globalnav/4/en_US/images/globalnav/apple/image_large.svg"
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
        <Route path="/Mac" component={Mac} />
        <Route path="/iPad" component={iPad} />
        <Route path="/iPhone" component={iPhone} />
        <Route path="/Watch" component={Watch} />
        <Route path="/TV" component={TV} />
        <Route path="/Music" component={Music} />
        {/* <Route path="/Support" component={Support} /> */}
      </div>
    );
  }
}

export default App;
