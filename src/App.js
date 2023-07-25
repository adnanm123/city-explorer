import React from "react";
import axios from "axios"; // axios is an object that has several methods
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import "./App.css";
// import Alert from 'react-bootstrap/Alert';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "",
      cityData: {},
      error: false,
      cityLon: "",
      cityLat: "",
      errorMessage: "",
    };
  }

  handleLocationSubmit = async (e) => {
    e.preventDefault();
    try {
      let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.cityName}&format=json`;
      let cityData = await axios.get(url);
      console.log(cityData);
      this.setState({
        cityData: cityData.data[0],
        cityLat: cityData.data[0].lat,
        cityLon: cityData.data[0].lon,
      });
    } catch (error) {
      console.log("This is an error");
      this.setState({
        error: true,
        errorMessage: `an error occurred: ${error.message}`,
      });
    }
  };

  changeCityInput = (e) => {
    this.setState({
      cityName: e.target.value,
    });
  };

  render() {
    let cityArr = [this.state.cityData];
    let displayCityData = cityArr.map((city, idx) => {
      let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=${this.state.cityLat},${this.state.cityLon}&zoom=12`;
      return (
        <div key={idx}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>City Name</th>
                <th>Latitude</th>
                <th>Longitude</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{city.display_name}</td>
                <td>{city.lat}</td>
                <td>{city.lon}</td>
              </tr>
            </tbody>
          </Table>
          <Image src={mapURL} roundedCircle />
          {/* {this.state.error && 
          <>
         <Alert>
         {this.state.errorMessage} 
       </Alert>
       </>
      } */}
        </div>
      );
    });

    return (
      <main>
        <h1>City Explorer</h1>
        <label>
          Search for a City:
          <input name="city" onChange={this.changeCityInput} />
        </label>
        <form onSubmit={this.handleLocationSubmit}>
          <button type="submit">Explore!</button>
        </form>
        <div>{displayCityData}</div>
      </main>
    );
  }
}

export default App;
