import React from "react";
import "./Movie.css";
import Carousel from "react-bootstrap/Carousel";
import MovieDay from "./MovieDay";

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0, // Add a state to track the selected movie index
    };
  }

  handleSelect = (selectedIndex) => {
    this.setState({
      selectedIndex,
    });
  };

  render() {
    const { movieData } = this.props;
    const { selectedIndex } = this.state;
    const selectedMovie = movieData[selectedIndex]; // Get the selected movie based on the selectedIndex

    return (
      <div>
        <h3 id="movieHeader">Top Movies</h3>
        <Carousel
          id="movieCarousel"
          activeIndex={selectedIndex}
          onSelect={this.handleSelect}
        >
          {movieData.map((movie, idx) => (
            <Carousel.Item key={idx}>
              {movie.image_url ? (
                <img
                  className="d-block w-100"
                  src={`https://image.tmdb.org/t/p/original/${movie.image_url}`}
                  alt={movie.title}
                />
              ) : (
                ""
              )}
            </Carousel.Item>
          ))}
        </Carousel>
        <MovieDay selectedMovie={selectedMovie} />
      </div>
    );
  }
}

export default Movie;
