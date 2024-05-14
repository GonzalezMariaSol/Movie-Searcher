//COMPONENTES
import { MovieCarousel, QuickDisplayHomeMovies } from "../components";

//SERVICIOS
import axios from "axios";

//HOOKS
import { useEffect, useState } from "react";

const Home = () => {
  const apiKey = "d680d948c76d81953776f10bdf72158a";

  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`; //armo un url para mis peliculas populares
        const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`; //armo un url para mis peliculas mejores puntuadas

//hago un     ⬇             destructuring                  ⬇ para poder poner los valores del array que va a llegar a una variable
        const [popularMoviesResponse, topRatedMoviesResponse] =
          await Promise.all([
            // envio dos solicitudes a la API de una vez y  a que ambas se completen antes de continuar
            axios.get(popularMoviesUrl), // get la info de popular url, y se la asigno a popular response (eso es x el orden)
            axios.get(topRatedMoviesUrl), // get la info de mejor puntuada url, y se la asigno a mejor puntuada response (eso es x el orden)
          ]);

        setPopularMovies(popularMoviesResponse.data.results);
        setTopRatedMovies(topRatedMoviesResponse.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <MovieCarousel popularMovies={popularMovies} />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
{/* Expresión ternaria para renderizar los componentes solo si los arrays tienen datos el uso de if en jsx no me lo permitia*/}
        {popularMovies.length > 0 && topRatedMovies.length > 0 && (
          <>
            <div style={{ flex: "1", marginRight: "10px" }}>
              <QuickDisplayHomeMovies
                title={"Popular Movies"}
                movies={popularMovies}
              />
            </div>
            <div style={{ flex: "1", marginLeft: "10px" }}>
              <QuickDisplayHomeMovies
                title={"Top Rated Movies"}
                movies={topRatedMovies}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default Home;
