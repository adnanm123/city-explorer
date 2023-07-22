import React from "react";
import axios from "axios"; // axios is an object that has several methods

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starWarsData: [],
      CityName: '',
      cityData: {},
      error: false
    };
  }

// When dealing with axios you need 3 things:
// -1) async
// -2) await
// -3) something

  handleSWSubmit = async (event) => {
    event.preventDefault();
    try {
      let swChars = await axios.get(`http://www.swapi.tech/api/people/?pages=1`);
      this.setState({
        starWarsData: swChars.data.results,
        error: false
      });
      } catch(error) {
        this.setState({
          error: true
        })
    }
  }

  handleLocationSubmit = async (e) => {
    e.preventDefault();

    let url = `https://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&q=${this.state.CityName}&format=json`;
    let cityData = await axios.get(url)
    this.setState({
      cityData: cityData.data[0]
    });
    // console.log(this.state.CityName);
    // console.log(cityData.data);
  }

  changeCityInput = (e) => {
    this.setState({
      CityName: e.target.value
    });
  }

  render() {
    console.log(this.state.cityData);
    let swList = this.state.starWarsData.map((char, idx) => {
      return <li key={idx}>{char.name}</li>;
    });

    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_API_KEY}&center=47.6038321,-122.330062&zoom=12`

    return (
      <>
        <h1>Data from an API</h1>
        <form onSubmit={this.handleSWSubmit}>
          <button type="submit">Display Star Wars Data</button>
        </form>
        {this.state.error
          ?
          <p>There was an error</p>
          :
          <ul>{swList}</ul>
        }
        <form onSubmit={this.handleLocationSubmit}>
          <button type="submit">Get Location Data</button>
          <label>Search for a City:
          <input name="city" onChange={this.changeCityInput} />
          </label>
        </form>
      </>
    );
  }
}

export default App;
