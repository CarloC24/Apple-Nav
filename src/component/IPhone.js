import React from "react";

import iPhoneXs from "../img/iphonexs_dark_large.svg";
import iPhoneXr from "../img/iphonexr_dark_large.svg";
import iPhone8 from "../img/iphone8_dark_large.svg";
import iPhone7 from "../img/iphone7_dark_large.svg";
import AirPods from "../img/airpods_dark_large.svg";
import Accessories from "../img/accessories_dark_large.svg";
import Compare from "../img/compare_dark_large.svg";

import "./Logo.scss";

const iPhone = () => {
  return (
    <div className="myLogos">
      <div className="logocontainer">
        <img src={iPhoneXs} alt="iPhoneXs" />
        <p>iPhone Xs</p>
      </div>
      <div className="logocontainer">
        <img src={iPhoneXr} alt="iPhoneXr" />
        <p>iPhone Xr</p>
      </div>
      <div className="logocontainer">
        <img src={iPhone8} alt="iPhone8" />
        <p>iPhone 8</p>
      </div>
      <div className="logocontainer">
        <img src={iPhone7} alt="iPhone7" />
        <p>iPhone 7</p>
      </div>
      <div className="logocontainer">
        <img
          src="https://apple.com/v/iphone/home/y/images/chapternav/ios_dark_large.svg"
          alt="ios12"
        />
        <p>iOS 12</p>
      </div>
      <div className="logocontainer">
        <img src={AirPods} alt="AirPods" />
        <p>AirPods</p>
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
export default iPhone;
