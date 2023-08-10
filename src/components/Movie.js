import React from "react";
import "./Movie.css";
import Carousel from "react-bootstrap/Carousel";

class Movie extends React.Component {
  render() {
    return (
      <div>
        <h3 id="movieHeader">Top Movies</h3>
        <Carousel id="movieCarousel">
          {this.props.movieData.map((movie, idx) => (
            <Carousel.Item key={idx}>
              <img
                className="d-block w-100"
                src={`https://image.tmdb.org/t/p/original/${movie.image_url}`}
                alt={movie.title}
              />
              <h5>{movie.title}</h5>
              <p>Overview: {movie.overview}</p>
              <p>Released On: {movie.released_on}</p>
              <p>Popularity: {movie.popularity}</p>
              <p>Average Votes: {movie.average_votes}</p>
              <p>Total Votes: {movie.total_votes}</p>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
export default Movie;
