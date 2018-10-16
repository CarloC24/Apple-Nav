import React from "react";

import Series4 from "../img/watch_nav_series_2_large.svg";
import NikeWatch from "../img/watch_nav_nike_large.svg";
import Hermes from "../img/watch_nav_hermes_large.svg";
import Series3 from "../img/watch_nav_edition_large.svg";
import watchOS from "../img/watch_nav_watch_os_large.svg";
import Bands from "../img/watch_nav_bands_large.svg";
import Accessories from "../img/watch_nav_accessories_large.svg";
import Compare from "../img/watch_nav_compare_large.svg";

import "./Logo.scss";

const Watch = () => {
  return (
    <div className="myLogos watch">
      <div className="logocontainer">
        <img src={Series4} alt="Series4" />
        <p className="p-ipad">Apple Watch Series 4</p>
      </div>
      <div className="logocontainer">
        <img src={NikeWatch} alt="NikeWatch" />
        <p className="p-ipad">NikeWatch</p>
      </div>
      <div className="logocontainer">
        <img src={Hermes} alt="Hermes" />
        <p className="p-ipad">Apple Watch Hermes</p>
      </div>
      <div className="logocontainer">
        <img src={Series3} alt="Series3" />
        <p className="p-ipad">Apple Watch Series 3</p>
      </div>
      <div className="logocontainer">
        <img
          src="https://apple.com/v/watch/home/k/images/watch_nav_watch_os_large.svg"
          alt="ios12"
        />
        <p className="p-ipad">iOS 12</p>
      </div>
      <div className="logocontainer">
        <img src={Bands} alt="Bands" />
        <p className="p-ipad">Bands</p>
      </div>
      <div className="logocontainer">
        <img src={Accessories} alt="Accessories" />
        <p className="p-ipad">Accessories</p>
      </div>
      <div className="logocontainer">
        <img src={Compare} alt="Compare" />
        <p className="p-ipad">Compare</p>
      </div>
    </div>
  );
};
export default Watch;
