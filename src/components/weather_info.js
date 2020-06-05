import React from "react";

const Weather = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props.name}</div>
    </div>
  );
};

export default Weather;
