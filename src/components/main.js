import React from "react";
import Weather from "./weather_info";

export default class FetchData extends React.Component {
  API_KEY = "77a4bb8eb611296e79652eace9660c3d";

  state = {
    loading: true,
    city: null,
    country: null,
    info: null,
  };

  async componentDidMount() {
    const url =
      "http://api.openweathermap.org/data/2.5/weather?q=Dublin,IE&units=metric&appid=" +
      this.API_KEY;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      city: data.name,
      info: data,
      country: data.sys["country"],
      temp: data.main["temp"],
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <Weather {...this.state.info} />
      </div>
    );
  }
}
