// import { LocalSeeOutlined } from "@mui/icons-material";
import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

const FavoritesContextProvider = ({ children }) => {
  const [favoritesMovies, setFavoritesMovies] = useState([]);

//MONTAJE, unica ejecucion al comienzo 
  useEffect(() => {
    const favoritedMoviesLS = JSON.parse(localStorage.getItem("favoritedMovies"));
    setFavoritesMovies(favoritedMoviesLS ? favoritedMoviesLS : []);
  }, []);

//ACTUALIZACION, se va a ejecutar cda vez que vea un cambio den favoritesmovies
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesMovies))
  }, [favoritesMovies]);

  const addFavoriteMovie = (movie) => {
    setFavoritesMovies([...favoritesMovies, movie]);
  };

  const removeFavoriteMovie = (movie) => {
    const movieToDelete = favoritesMovies.filter(
      (favMovie) => favMovie.id !== movie.id
    );
    setFavoritesMovies(movieToDelete);
  };

  const isFavorite = (movie) => {
    const movieExist = favoritesMovies.some(
      (favMovie) => favMovie.id === movie.id
    );
    return movieExist;
  };

  const data = {
    favoritesMovies,
    addFavoriteMovie,
    removeFavoriteMovie,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};
export default FavoritesContextProvider;
