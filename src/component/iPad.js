import React from "react";

import iPadCompare from "../img/ipad_comp_large.svg";
import iPadl from "../img/ipad_large.svg";
import iPadAccessories from "../img/ipad_acc_large.svg";
import iPadPro from "../img/ipadpro_light_large.svg";
import iPadMini from "../img/ipadmini_large.svg";
import iPadOS from "../img/ipad_ios10_large.svg";
import "./Logo.scss";

const iPad = () => {
  return (
    <div className="ipad-container myLogos">
      <div className="logocontainer">
        <img src={iPadPro} alt="iPadPro" />
        <p className="p-ipad">iPadPro</p>
      </div>
      <div className="logocontainer">
        <img src={iPadl} alt="iPad" />
        <p className="p-ipad">iPad</p>
      </div>
      <div className="logocontainer">
        <img src={iPadMini} alt="iPadMini" />
        <p className="p-ipad">iPadMini</p>
      </div>
      <div className="logocontainer">
        <img src={iPadOS} alt="ios12" />
        <p className="p-ipad">iOS 12</p>
      </div>
      <div className="logocontainer">
        <img src={iPadAccessories} alt="Accessories" />
        <p className="p-ipad">Accessories</p>
      </div>
      <div className="logocontainer">
        <img src={iPadCompare} alt="Compare" />
        <p className="p-ipad">Compare</p>
      </div>
    </div>
  );
};
export default iPad;
