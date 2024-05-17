//LLAMADA API
import axios from "axios";

//HOOKS
import { useState } from "react";

const useMovie = () => {
  const apiKey = "d680d948c76d81953776f10bdf72158a";
  const [releasedMovies, setReleasedMovies] = useState([]); // Ultimas peliculas estrenadas
  const [popularMovies, setPopularMovies] = useState([]); // PelIculas más populares
  const [topRatedMovies, setTopRatedMovies] = useState([]); // PelIculas mejor puntuadas
  const [searchedMovie, setSearchedMovie] = useState([]); //Peliculas que coincidan con las letras buscadas
  const [oneMovie, setOneMovie] = useState({}); // Una pelicula especifica por ID
  const [pages, setTotalPages] = useState(0); // Total de paginas en esa categoria
  const [currentPage, setCurrentPage] = useState(1); // Numero de pagina actual en esa categoria



  // Obtener las ultimas peliculas estrenadas -CARRUSEL Y TAB
  const getAllReleasedMovies = async (currentPage = 1) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`;
      const response = await axios.get(moviesUrl);
      setReleasedMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data for all released movies:", error);
    }
  };

  // Obtener peliculas populares -TAB Y SCROLL HOME
  const getAllPopularMovies = async (currentPage = 1) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`;
      const response = await axios.get(moviesUrl);
      setPopularMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data for all popular movies:", error);
    }
  };

  // Obtener peliculas mejor puntuadas -SOLO SCROLL HOME
  const getAllTopMovies = async (currentPage = 1) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${currentPage}`;
      const response = await axios.get(moviesUrl);
      setTopRatedMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data for all top rated movies:", error);
    }
  };

  // Obtener peliculas que coincidan con el nombre buscado - SEARCH TAB
  const getSearchedMovies = async (value) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${value}`;
      const response = await axios.get(moviesUrl);
      setSearchedMovie(response.data.results);
    } catch (error) {
      console.error("Error fetching data for searched movie:", error);
    }
  };

  // Obtener una pelicula especifica por ID
  const getOneMovie = async (id) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const response = await axios.get(moviesUrl);
      setOneMovie(response.data);
    } catch (error) {
      console.error("Error fetching data for the movie:", error);
    }
  };



  return {
    releasedMovies, // used
    popularMovies, // used
    topRatedMovies, // used
    searchedMovie, // used
    oneMovie, //used
    pages, // used
    currentPage, // used
    getAllReleasedMovies, // used
    getAllPopularMovies, // used
    getAllTopMovies, // used
    getSearchedMovies, // used
    getOneMovie, //used
    setCurrentPage, // used
  };
};
export default useMovie;
