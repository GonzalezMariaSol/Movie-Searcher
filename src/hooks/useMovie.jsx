//LLAMADA API
import axios from "axios";

//HOOKS
import { useState } from "react";


const useMovie = () => {
  const apiKey = "d680d948c76d81953776f10bdf72158a";
  const [releasedMovies, setReleasedMovies] = useState([]); // Últimas películas estrenadas
  const [popularMovies, setPopularMovies] = useState([]); // Películas más populares
  const [topRatedMovies, setTopRatedMovies] = useState([]); // Películas mejor puntuadas
  const [oneMovie, setOneMovie] = useState({}); // Una película específica por ID
  const [pages, setTotalPages] = useState(0); // Total de páginas en esa categoría
  const [currentPage, setCurrentPage] = useState(1); // Número de página actual en esa categoría

  // Obtener las últimas películas estrenadas -CARRUSEL Y TAB
  const getAllReleasedMovies = async (currentPage = 1) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&page=${currentPage}`;
      const response = await axios.get(moviesUrl);
      setReleasedMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Obtener películas populares -TAB Y SCROLL HOME 
  const getAllPopularMovies = async (currentPage = 1) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`;
      const response = await axios.get(moviesUrl);
      setPopularMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Obtener películas mejor puntuadas -SOLO SCROLL HOME
  const getAllTopMovies = async (currentPage = 1) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${currentPage}`;
      const response = await axios.get(moviesUrl);
      setTopRatedMovies(response.data.results);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Obtener una película específica por ID
  const getOneMovie = async (id) => {
    try {
      const moviesUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
      const response = await axios.get(moviesUrl);
      setOneMovie(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return {
    releasedMovies, // used
    popularMovies, // used
    topRatedMovies, // used
    oneMovie,
    pages, // used
    currentPage, // used
    getAllReleasedMovies, // used
    getAllPopularMovies, // used
    getAllTopMovies, // used
    getOneMovie,
    setCurrentPage, // used
  };
};

export default useMovie;
