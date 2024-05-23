import { Box, Button } from "@mui/material";
import { useMovie } from "../hooks";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// NAVEGACION
import { useNavigate } from "react-router-dom";


const TrailerPage = () => {
  const { trailerMovieInfo, getMovieForTrailer } = useMovie(); //me traigo la funcion para hacer que traiga la URL de loS videoS, y donde lo guardamos

  const { videoId } = useParams(); //me trae el id de la pelicula seleccionada

  const navigate = useNavigate(); // inicializamos funcion navigate

  useEffect(() => {
    getMovieForTrailer(videoId); //inicializo la funcion para poder obtener la URL
  }, []);

  const NeonTextStyle = {
    color: "#ff6a6a",
    textShadow: `
      0 0 5px red,
      0 0 10px red,
      0 0 20px red,
      0 0 30px red,
      0 0 40px red,
      0 0 50px red,
      0 0 60px red
    `,
  };
  const NeonIconStyle = {
    color: "#ff6a6a",
    filter:
      "drop-shadow(0 0 5px red) drop-shadow(0 0 10px red) drop-shadow(0 0 15px red) drop-shadow(0 0 20px red)",
  };

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
        backgroundColor: "black",
        padding: "20px",
        position: "relative",
        overflow: "hidden",
        flexWrap: "wrap",
        minHeight: "100%",
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

      <Button
      onClick={() => navigate(`/detail/${videoId}`)}
        sx={{
          margin: "5vh",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "1vw",
          borderRadius: "1.5vw",
          border: "0.2vw solid #ff6a6a",
          boxShadow: `
          0 0 0.4vw red,
          0 0 0.8vw red,
          0 0 1.2vw red,
          0 0 1.6vw red
        `,
          position: "relative",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            margin: 0,
            ...NeonTextStyle,
          }}
        >
          EXIT <DirectionsRunIcon sx={{ ...NeonIconStyle }} />
          <ArrowForwardIcon sx={{ ...NeonIconStyle }} />
        </p>
      </Button>
    </Box>
  );
};
export default TrailerPage;
