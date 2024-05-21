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
        minHeight: "100vh",
        backgroundColor: "#000",
        padding: "20px",
      }}
    >
      {trailerMovieInfo && (
        <iframe
          width="800"
          height="450"
          src={`https://www.youtube.com/embed/${trailerMovieInfo.key}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </Box>
  );
};
export default TrailerPage;
