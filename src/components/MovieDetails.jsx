import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { useMovie } from "../hooks";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { getOneMovie, oneMovie } = useMovie();

  useEffect(() => {
    getOneMovie(movieId);
  }, []);

  const getMovieBackgroundImageUrl = (movie) => {
    return movie?.backdrop_path
      ? `https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`
      : null;
  };

  const getMovieImageUrl = (movie) => {
    return movie?.poster_path
      ? `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
      : null;
  };

  const getReleasedYear = (movie) => {
    return movie?.release_date ? movie.release_date.split("-")[0] : null;
  };

  console.log(oneMovie);

  return (
    <Box
      sx={{
        backgroundImage: `url(${getMovieBackgroundImageUrl(oneMovie)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: 560,
        width: "100%",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#00000085",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          sx={{ height: "85%", width: "75%", padding: 2 }}
          spacing={2}
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
        >
          <Grid item xs={12} sm={4} sx={{ overflow: "hidden" }}>
            <Paper sx={{ height: "100%", overflow: "hidden" }}>
              <img
                src={getMovieImageUrl(oneMovie)}
                alt="Movie Poster"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Paper>
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            md={7}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              color: "white",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h4" component="h2">
                {oneMovie?.title}{" "}
                <span style={{ color: "grey", fontSize: "small" }}>
                  {getReleasedYear(oneMovie)}
                </span>
              </Typography>
              <Button
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "red",
                  },
                }}
                onClick={console.log("HOLIS")}
              >
                <PlayArrowIcon sx={{ fontSize: 30 }} /> See trailer
              </Button>
            </Box>
            <Box>
              <Typography variant="body1">{oneMovie?.overview}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="p">
                Géneros:
              </Typography>
              <ul>
                {oneMovie?.genres?.map((genre) => (
                  <li key={genre.id}>
                    <Typography variant="body2">{genre.name}</Typography>
                  </li>
                ))}
              </ul>
            </Box>
            <Button
              sx={{
                color: "white",
                backgroundColor: oneMovie.homepage ? "blue" : "grey",
                cursor: oneMovie.homepage ? "pointer" : "not-allowed",
              }}
              disabled={!oneMovie.homepage}
            >
              See More
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MovieDetails;