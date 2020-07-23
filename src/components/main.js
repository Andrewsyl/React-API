import React from "react";
import Weather from "./weather_info";
import Form from "./city_form";
import Bolt from "./icons/bolt-solid.svg";
import Rain from "./icons/cloud-showers-heavy-solid.svg";
import Cloud from "./icons/cloud-solid.svg";
import Sun from "./icons/sun-regular.svg";
import Snow from "./icons/snowflake-solid.svg";

const api_key = "77a4bb8eb611296e79652eace9660c3d";

export default class FetchData extends React.Component {
  state = {
    city: "",
    country: "",
    icon: undefined,
    main: undefined,
    celsius: undefined,
    temp_max: null,
    temp_min: null,
    description: "",
    error: false,
  };

  get_WeatherIcon(rangeId) {
    switch (true) {
      case rangeId >= 200 && rangeId < 232:
        this.setState({ icon: Bolt });
        break;
      case rangeId >= 300 && rangeId <= 321:
        // this.setState({ icon: Drizzle });
        break;
      case rangeId >= 500 && rangeId <= 521:
        this.setState({ icon: Rain });
        break;
      case rangeId >= 600 && rangeId <= 622:
        this.setState({ icon: Snow });
        break;
      case rangeId >= 701 && rangeId <= 781:
        // this.setState({ icon: Wind });
        break;
      case rangeId === 800:
        this.setState({ icon: Sun });
        break;
      case rangeId >= 801 && rangeId <= 804:
        this.setState({ icon: Cloud });
        break;
      default:
        this.setState({ icon: "fa fa-clouds" });
    }
  }

  getWeather = async (e) => {
    e.preventDefault();
    const country = e.target.elements.country.value;
    const city = e.target.elements.city.value;

    const url =
      `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=` +
      api_key;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      city: data.name,
      country: data.sys.country,
      temp: data.main.temp,
      description: data.weather[0].description,
    });

    this.get_WeatherIcon(data.weather[0].id);
  };

  render() {
    return (
      <div>
        <Form loadweather={this.getWeather} error={this.state.error} />
        <Weather
          cityname={this.state.city}
          temp={this.state.temp}
          country={this.state.country}
          weatherIcon={this.state.icon}
          description={this.state.description}
        />
      </div>
    );
  }
}
