import React from "react";
import pic from "../dublin-overview.jpeg";

const Weather = (props) => {
  console.log(props);
  document.body.style.backgroundImage = `url(${pic})`;
  return (
    <div className="row form-group">
      <div className="container">
        <div className="col-sm mt-2">
          {props.cityname}, {props.country}
        </div>
        <div>{props.temp}°</div>
        <div className="weather-icons">
          <img src={props.weatherIcon}></img>
        </div>
        <div>
          <div className="weather-description">{props.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
