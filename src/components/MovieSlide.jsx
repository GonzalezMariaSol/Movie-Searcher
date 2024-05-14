import React from "react";
import { Box, Button } from "@mui/material";

function MovieSlide({ movie }) {

  //funcion que se ocupa de crear el link especifico para el poster
  const getMovieImageUrl = (movie) => {
    if (!movie.poster_path) {
      //si no tiene un poster la peli, devuelve null
      return null;
    }
    return `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "65vh",
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
          objectFit: "cover", // Para que la imagen se recorte y ocupe todo el espacio
          objectPosition: "center top", //
          //   objectPosition: "center" //
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
          height: "auto", // Altura automática
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>{movie.title}</h3>
        <p>{movie.overview}</p>
        <Button
          style={{
            backgroundColor: "lightblue",
            color: "white",
            borderRadius: "5px",
          }}
        >
          See more...
        </Button>
      </Box>
    </Box>
  );
}

export default MovieSlide;