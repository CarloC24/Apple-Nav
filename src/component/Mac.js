import React from "react";

import MacBook from "../img/macbook_dark_large.svg";
import MacBookAir from "../img/macbookair_dark_large.svg";
import MacBookPro from "../img/macbookpro_dark_large.svg";
import iMac from "../img/imac_dark_large.svg";
import iMacPro from "../img/imac_pro_dark_large.svg";
import MacPro from "../img/macpro_dark_large.svg";
import MacMini from "../img/macmini_dark_large.svg";
import Accessories from "../img/accessories_large.svg";
import Mojave from "../img/mac_osx_dark_large.svg";
import Compare from "../img/mac_comp_dark_large.svg";

import "./Logo.scss";

const Mac = () => {
  return (
    <div className="myLogos">
      <div className="logocontainer">
        <img src={MacBook} alt="MacBook" />
        <p>MacBook</p>
      </div>
      <div className="logocontainer">
        <img src={MacBookAir} alt="MacBookAir" />
        <p>MacBookAir</p>
      </div>
      <div className="logocontainer">
        <img src={MacBookPro} alt="MacBookPro" />
        <p>MacBookPro</p>
      </div>
      <div className="logocontainer">
        <img src={iMac} alt="iMac" />
        <p>iMac</p>
      </div>
      <div className="logocontainer">
        <img src={MacPro} alt="MacPro" />
        <p>MacPro</p>
      </div>
      <div className="logocontainer">
        <img src={iMacPro} alt="iMacPro" />
        <p>iMacPro</p>
      </div>
      <div className="logocontainer">
        <img src={MacMini} alt="MacMini" />
        <p>MacMini</p>
      </div>
      <div className="logocontainer">
        <img
          src="https://apple.com/v/mac/home/ac/images/familybrowser/mac_acc_dark_large.svg"
          alt="Accessories"
        />
        <p>Accessories</p>
      </div>
      <div className="logocontainer">
        <img src={Mojave} alt="Mojave" />
        <p>Mojave</p>
      </div>
      <div className="logocontainer">
        <img src={Compare} alt="Compare" />
        <p>Compare</p>
      </div>
    </div>
  );
};
export default Mac;
