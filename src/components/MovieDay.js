import React from "react";
import "./MovieDay.css"; 

class MovieDay extends React.Component {
  render() {
    const { selectedMovie } = this.props;

    if (!selectedMovie) {
      return null;
    }

    return (
      <div className="movie-day">
        <h3>{selectedMovie.title}</h3>
        <p>Overview: {selectedMovie.overview}</p>
        <p>Released On: {selectedMovie.released_on}</p>
        <p>Popularity: {selectedMovie.popularity}</p>
        <p>Average Votes: {selectedMovie.average_votes}</p>
        <p>Total Votes: {selectedMovie.total_votes}</p>
      </div>
    );
  }
}

export default MovieDay;
