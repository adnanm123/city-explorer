import React from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import "./App.css";
import "./components/CityTable.css";
import Alert from "react-bootstrap/Alert";
import CityTable from "./components/CityTable";
import CityForm from "./components/CityForm";
import Weather from "./components/Weather";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      error: false,
      success: false,
      lon: "",
      lat: "",
      errorMessage: "",
      cityDisplayName: "",
      weather: [],
      weatherError: "",
    };
  }

  handleLocationSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`;
      let cityData = await axios.get(url);
      let lat = cityData.data[0].lat;
      let lon = cityData.data[0].lon;
      let cityDisplayName = cityData.data[0].display_name;

      this.setState({
        cityData: cityData.data[0],
        lat: lat,
        lon: lon,
        cityDisplayName: cityDisplayName,
        success: true,
      });

      this.displayWeather(cityData.data[0].lat, cityData.data[0].lon);
    } catch (error) {
      console.log("This is an error");
      this.setState({
        error: true,
        success: false,
        errorMessage: `An error occurred: ${
          error.response ? error.response.status : error.message
        }`,
      });
    }
  };

  displayWeather = async (lat, lon) => {
    const weatherData = `${process.env.REACT_APP_SERVER_URL}/weather?searchQuery=${this.state.cityName}&lat=${lat}&lon=${lon}`;
    try {
      const weather = await axios.get(weatherData);
      this.setState({ weather: weather.data });
    } catch (error) {
      console.log(
        "This is an error inside display weather function",
        error.response.data
      );
      this.setState({ weatherError: error.response.data });
    }
  };

  changeCityInput = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  render() {
    return (
      <main>
        <h1 className="title">City Explorer</h1>
        <CityForm
          handleLocationSubmit={this.handleLocationSubmit}
          changeCityInput={this.changeCityInput}
        />
        {this.state.error ? (
          <Alert variant="danger">{this.state.errorMessage}</Alert>
        ) : null}
        {this.state.success ? (
          <Alert variant="success">City data retrieved successfully!</Alert>
        ) : null}
        {this.state.cityData && this.state.lat && this.state.lon ? (
          <div className="CityTable">
            <CityTable
              lat={this.state.lat}
              lon={this.state.lon}
              cityDisplayName={this.state.cityDisplayName}
            />
            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.lat},${this.state.lon}&zoom=12`}
              thumbnail
            />
            {this.state.weatherError ? (
              <Alert variant="danger">{this.state.weatherError}</Alert>
            ) : (
              <Weather weatherData={this.state.weather} />
            )}
          </div>
        ) : (
          <div className="CityNotFound">Please input a valid city name</div>
        )}
      </main>
    );
  }
}

export default App;
