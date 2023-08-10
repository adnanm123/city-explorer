import React from "react";
import "./Weatherday.css";
import Card from "react-bootstrap/Card";

class WeatherDay extends React.Component {
  render() {
    return (
      <div className="weather-container">
        <h3 className="forecast-title">Weather Forecast</h3>
        {this.props.weatherData.map((day, idx) => (
          <Card className="weather-card" key={idx}>
            <Card.Body>
              <Card.Title>{day.date}</Card.Title>
              <Card.Text>{day.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

export default WeatherDay;
