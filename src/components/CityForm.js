import React from "react";
import "./CityForm.css";

class CityForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleLocationSubmit}>
        <label>
          Search for a City:
          <input name="city" onChange={this.props.changeCityInput} />
        </label>
        <button type="submit">Explore!</button>
      </form>
    );
  }
}

export default CityForm;
