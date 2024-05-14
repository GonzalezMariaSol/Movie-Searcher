import React from "react";
import MovieSlide from "./MovieSlide"; //guarda solo UNA visual de una pelicula, luego tengo que reutilizarlo

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieCarousel({ popularMovies }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {popularMovies.map((movie) => (
        <div key={movie.id}>
          <MovieSlide movie={movie} />
        </div>
      ))}
    </Slider>
  );
}

export default MovieCarousel;