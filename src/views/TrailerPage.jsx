import { Box } from "@mui/material";
import { useMovie } from "../hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const TrailerPage = () => {
  const { trailerMovieInfo, getMovieForTrailer } = useMovie(); //me traigo la funcion para hacer que traiga la URL de loS videoS, y donde lo guardamos

  const { videoId } = useParams(); //me trae el id de la pelicula seleccionada 

  useEffect(() => {
    getMovieForTrailer(videoId); //inicializo la funcion para poder obtener la URL
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: {
          xs: "50vh", 
          sm: "70vh", 
          md: "80vh", 
          lg: "90vh", 
        },
        backgroundColor: "yellow",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {trailerMovieInfo && (
        <Box
          sx={{
            position: "relative",
            width: "80%",
            paddingBottom: "45%", 
            height: 0,
          }}
        >
          <iframe
            src={`https://www.youtube.com/embed/${trailerMovieInfo.key}`}
            title="YouTube video player"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      )}
    </Box>
  );
  
};
export default TrailerPage;
