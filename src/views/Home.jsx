import { MovieCarousel } from "../components";

import axios from "axios";
import { useEffect, useState } from "react";
import QuickDisplayHomeMovies from "../components/QuickDisplayHomeMovies";

const Home = () => {
  // //!Nose si debo usar esta key
  // const APIReadAccessToken =
  //   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjgwZDk0OGM3NmQ4MTk1Mzc3NmYxMGJkZjcyMTU4YSIsInN1YiI6IjY2NDIzNzE2NzUxYmNkMTIyMjAxZDI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRWsE8_TicEavfOaBPEtFs9jKflHi6u2bdiiGulvnoo";

  const apiKey = "d680d948c76d81953776f10bdf72158a";

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const urlBase = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        const { data } = await axios.get(urlBase);
        setPopularMovies(data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <MovieCarousel popularMovies={popularMovies} />
      <QuickDisplayHomeMovies popularMovies={popularMovies}/>
    </>
  );
};
export default Home;
