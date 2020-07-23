import React from "react";
import pic from "../dublin-overview.jpeg";

const Weather = (props) => {
  console.log(props);
  document.body.style.backgroundImage = `url(${pic})`;
  return (
    <div className="row form-group">
      <div className="container">
        <div className="py-4 col-sm mt-2">
          {props.cityname}
          {props.country}
        </div>
        <div>{props.temp ? props.temp + "°" : ""}</div>
        <div className="py-4 weather-icons">
          <img alt="" src={props.weatherIcon}></img>
        </div>
        <div>
          <div className="weather-description">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
