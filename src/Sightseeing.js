import axios from "axios";
import React from "react";
import jsSHA from "jssha";
import counties from "./county_data";
import SightseeingCard from "./SightseeingCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SightseeingBg from "./images/SightseeingBg-mobile.png";
import { AiOutlineSearch } from "react-icons/ai";
import { GiAbstract050 } from "react-icons/gi";

export default function Sightseeing() {
  const [sightseeingSpot, setSightseeingSpot] = useState(null);
  const [county, setCounty] = useState(counties);
  const [scenicSpotId, setScenicSpotId] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const baseURL = `https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot/${scenicSpotId}?$top=30&$format=JSON`;

  useEffect(() => {
    axios
      .get(baseURL, {
        headers: getAuthorizationHeader(),
      })
      .then((response) => {
        setSightseeingSpot(response.data);
      });
  }, [getCity]);

  if (!sightseeingSpot) return null;

  function getCity(cityEng) {
    const scenicSpotId = counties.find((county) => county.cityEng === cityEng);
    setScenicSpotId(scenicSpotId.cityEng);
    console.log(scenicSpotId.cityEng);
    // const scenicSpotId = city.
  }

  function getAuthorizationHeader() {
    //  填入自己 ID、KEY 開始
    let AppID = "5596be51c1434c2194c70a5ea9967f67";
    let AppKey = "JOfU8PU8kVefNcWsj95pfoj4kdE";
    //  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA("SHA-1", "TEXT");
    ShaObj.setHMACKey(AppKey, "TEXT");
    ShaObj.update("x-date: " + GMTString);
    let HMAC = ShaObj.getHMAC("B64");
    let Authorization =
      'hmac username="' +
      AppID +
      '", algorithm="hmac-sha1", headers="x-date", signature="' +
      HMAC +
      '"';
    return { Authorization: Authorization, "X-Date": GMTString };
  }

  const openAdvSearch = () => {
    return (
      <>
        <p>hi</p>
      </>
    );
  };
  // console.log(sightseeingSpot);

  return (
    <div>
      <div>
        <div className="SightseeingBg-container">
          <input id="searchBar" type="text" placeholder="  請輸入關鍵字" />
          <AiOutlineSearch className="searchIcon" />
        </div>
        <div className="SightseeingBg-container-2">
          <div>
            <GiAbstract050 id="giIcon" />
            <p onClick={() => setShowSearch(!showSearch)}>進階搜尋</p>
          </div>
        </div>
        <img
          src={SightseeingBg}
          alt="SightseeingBg"
          className="SightseeingBg"
        />
      </div>
      {showSearch && (
        <div className="county-area">
          {counties.map(({ city, cityEng, id }) => {
            return (
              <Link to={`/sightseeing/${scenicSpotId}`}>
                <button
                  className="cityBtn"
                  key={id}
                  onClick={() => getCity(cityEng)}
                >
                  {city}
                </button>
              </Link>
            );
          })}
        </div>
      )}
      <SightseeingCard sightseeingSpot={sightseeingSpot} />
    </div>
  );
}
