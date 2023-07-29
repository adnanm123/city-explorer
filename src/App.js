import React from "react";
import axios from "axios";
import Image from "react-bootstrap/Image";
import "./App.css";
import Alert from "react-bootstrap/Alert";
import CityTable from "./components/CityTable";
import CityForm from "./components/CityForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      error: false,
      success: false,
      cityLon: "",
      cityLat: "",
      errorMessage: "",
      cityDisplayName: "",
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
        cityLat: lat,
        cityLon: lon,
        success: true,
      });
      this.setState({
        cityDisplayName: cityDisplayName,
      });
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
        {this.state.cityData ? (
          <div className="CityTable">
            <CityTable
              cityLat={this.state.cityLat}
              cityLon={this.state.cityLon}
              cityDisplayName={this.state.cityDisplayName}
            />
            <Image
              src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=12`}
              roundedCircle
            />
          </div>
        ) : (
          <div className="CityNotFound">City is not found</div>
        )}
      </main>
    );
  }
}

export default App;
