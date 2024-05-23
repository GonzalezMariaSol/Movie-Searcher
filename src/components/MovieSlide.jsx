//MUI ELEMENTOS
import { Box, Button, IconButton } from "@mui/material";

import { FavoritesContext } from "../context/FavoritesContext";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; //corazon vacio
import FavoriteIcon from "@mui/icons-material/Favorite"; //corazon con relleno


function MovieSlide({ movie }) {
  
  const navigate = useNavigate(); // inicializamos función navigate
  const { addFavoriteMovie, removeFavoriteMovie, isFavorite } =
    useContext(FavoritesContext);


  //funcion que se ocupa de crear el link especifico para el poster
  const getMovieImageUrl = (movie) => {

    if (!movie.backdrop_path) {
      //si no tiene un poster la peli, devuelve null
      return null;
    }
    // https://image.tmdb.org/t/p/original/${movie.backdrop_path
    return `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "75vh",
        // height:"400px",
        display: "flex",
        alignItems: "stretch",
        backgroundColor: "red",
        overflow: "hidden",
      }}
    >
      <img
        src={getMovieImageUrl(movie)}
        alt="Movie poster"
        style={{
          width: "100%",
          objectFit: "cover",
          objectPosition: "center center", 
        }}
      />

      <Box
        sx={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          width: "80vh",
          padding: "10px",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          borderRadius: "5px",
          height: "auto",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>{movie.title}</h3>
        <p>{movie.overview}</p>
        <Box style={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>

        <Button
          style={{
            backgroundColor: "lightblue",
            color: "white",
            borderRadius: "5px",
            width:"50%",
            marginRight:"4vh"
          }}
          onClick={() => navigate(`/detail/${movie.id}`)}
        >
          See more...
        </Button>
        {isFavorite(movie) ? (
                  <IconButton
                    onClick={() => removeFavoriteMovie(movie)}
                    sx={{
                      backgroundColor: "black",
                      color: "red",
                      borderRadius: "5px",
                      flexGrow: 1,
                      maxHeight: "50px",
                      "&:hover": {
                        backgroundColor: "blue",
                        "& svg": {
                          color: "red",
                        },
                      },
                    }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => addFavoriteMovie(movie)}
                    sx={{
                      backgroundColor: "black",
                      color: "#fff",
                      borderRadius: "5px",
                      flexGrow: 1,
                      maxHeight: "50px",
                      "&:hover": {
                        backgroundColor: "blue",
                        "& svg": {
                          color: "red",
                        },
                      },
                    }}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
        </Box>
      </Box>
    </Box>
  );
}

export default MovieSlide;