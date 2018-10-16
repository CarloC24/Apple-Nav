import React from "react";

import Music1 from "../img/apple_music_large.svg";
import iTunes from "../img/itunes_large.svg";
import HomePod from "../img/homepod_icon_large.svg";
import iPod from "../img/ipod_touch_light_large.svg";
import AirPods from "../img/airpods_dark_large.svg";
import Accessories from "../img/accessories_large.svg";
import GiftCards from "../img/gift_cards_large.svg";

import "./Logo.scss";

const Music = () => {
  return (
    <div className="myLogos ipad-container">
      <div className="logocontainer">
        <img src={Music1} alt="Music" />
        <p className="p-ipad">Apple Music</p>
      </div>
      <div className="logocontainer">
        <img src={iTunes} alt="iTunes" />
        <p className="p-ipad">iTunes</p>
      </div>
      <div className="logocontainer">
        <img src={HomePod} alt="HomePod" />
        <p className="p-ipad">HomePod</p>
      </div>
      <div className="logocontainer">
        <img src={AirPods} alt="AirPods" />
        <p className="p-ipad">AirPods</p>
      </div>
      <div className="logocontainer">
        <img src={iPod} alt="iPod" />
        <p className="p-ipad">iPod touch</p>
      </div>
      <div className="logocontainer">
        <img src={Accessories} alt="Accessories" />
        <p className="p-ipad">Accessories</p>
      </div>
      <div className="logocontainer">
        <img src={GiftCards} alt="GiftCards" />
        <p className="p-ipad">Gifts Cards</p>
      </div>
    </div>
  );
};
export default Music;
