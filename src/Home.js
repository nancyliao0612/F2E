import React from "react";
import { Link } from "react-router-dom";
import HomeBackground from "./images/HomeBackground-mobile.png";
import HomeBackground_2 from "./images/HomeBackground-2-mobile.png";
import TaiwanLogo from "./images/logo.png";
import sightseeing from "./images/sightseeing.png";
import traffic from "./images/traffic.png";
import accommodation from "./images/accommodation.png";
import food from "./images/food.png";

const Home = () => {
  return (
    <>
      <section>
        <img src={HomeBackground} alt="HomeBackground" className="HomeBg" />
        <div className="logo-center">
          <img src={TaiwanLogo} alt="logo" className="TaiwanLogo" />
        </div>
        <div className="text-center">
          <img src={HomeBackground_2} alt="HomeBackground_2" />
          <div className="home-intro">
            <p>
              台灣許多美景媲美國外，值此五倍券、國旅券及觀光業者加碼優惠盡出之際，旅行台灣就是現在！
            </p>
            <p>到哪裡旅遊還沒有想法的民眾，歡迎到台灣觀光，體驗「台灣之美」!</p>
          </div>
        </div>

        <div className="label-category">
          <Link to="/sightseeing">
            <img src={sightseeing} alt="sightseeing" />
            <div>
              <p>景點</p>
            </div>
          </Link>
          <Link to="#">
            <img src={traffic} alt="traffic" />
            <div>
              <p>交通</p>
            </div>
          </Link>
          <Link to="#">
            <img src={accommodation} alt="accommodation" />
            <div>
              <p>住宿</p>
            </div>
          </Link>
          <Link to="#">
            <img src={food} alt="food" />
            <div>
              <p>美食</p>
            </div>
          </Link>
        </div>
      </section>
      <div>Home Page</div>
      <Link to="/App">To app</Link>
    </>
  );
};

export default Home;
