import React from "react";

import TVApp from "../img/tvapp_dark_large.svg";
import Accessories from "../img/accessories_dark_large (1).svg";
import Compare from "../img/compare_dark_large (1).svg";

import "./Logo.scss";

const TV = () => {
  return (
    <div className="myLogos">
      <div className="logocontainer">
        <img
          src="https://apple.com/v/tv/home/e/images/home/apple_tv_dark_large.svg"
          alt="4k"
        />
        <p>Apple TV 4k</p>
      </div>
      <div className="logocontainer">
        <img
          src="https://apple.com/v/tv/home/e/images/home/apple_tv_dark_large.svg"
          alt="TV"
        />
        <p>Apple TV</p>
      </div>
      <div className="logocontainer">
        <img src={TVApp} alt="TVApp" />
        <p>TV App</p>
      </div>
      <div className="logocontainer">
        <img src={Accessories} alt="Accessories" />
        <p>Accessories</p>
      </div>
      <div className="logocontainer">
        <img src={Compare} alt="Compare" />
        <p>Compare</p>
      </div>
    </div>
  );
};
export default TV;
