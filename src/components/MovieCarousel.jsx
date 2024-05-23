//COMPONENTES
import {MovieSlide} from "./"

//SLIDERS
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieCarousel({ releasedMovies }) {
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
      {releasedMovies.map((movie) => (
        <div key={movie.id}>
          <MovieSlide movie={movie} />
        </div>
      ))}
    </Slider>
  );
}

export default MovieCarousel;
