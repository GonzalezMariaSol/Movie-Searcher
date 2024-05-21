import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Grid, Typography, Paper, Button } from "@mui/material";
import { useMovie } from "../hooks";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const { movieId } = useParams();
  const { getOneMovie, oneMovie } = useMovie();
  const { addFavoriteMovie, removeFavoriteMovie, isFavorite } =
    useContext(FavoritesContext);
  const navigate = useNavigate();

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

  return (
    <Box
      sx={{
        backgroundImage: `url(${getMovieBackgroundImageUrl(oneMovie)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
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
          flexWrap={"wrap"}
        >
          <Box
            sx={{
              width: "40%",
              height:"95%",
              overflow: "hidden",
              "@media (max-width: 890px)": {
                width: "70%",
              },
            }}
          >
            <img
              src={getMovieImageUrl(oneMovie)}
              alt="Movie Poster"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1)",
                transition: "transform 0.3s ease",
                "@media (maxWidth: 890px)": {
                  transform: "scale(0.8)",
                },
              }}
            />
          </Box>

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
                onClick={() => {
                  navigate(`/trailer/${oneMovie.id}`);
                }}
                sx={{
                  color: "white",
                  "&:hover": {
                    color: "red",
                  },
                }}
              >
                <PlayArrowIcon sx={{ fontSize: 30 }} /> See trailer
              </Button>
            </Box>
            <Box>
              <Typography variant="body1">{oneMovie?.overview}</Typography>
            </Box>
            <Box>
              <Typography variant="h6" component="p">
                Genders:
              </Typography>
              <ul>
                {oneMovie?.genres?.map((genre) => (
                  <li key={genre.id}>
                    <Typography variant="body2">{genre.name}</Typography>
                  </li>
                ))}
              </ul>
            </Box>

            {isFavorite(oneMovie) ? (
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  "&:hover": {
                    backgroundColor: "blue",
                    color: "red",
                  },
                }}
                startIcon={<FavoriteIcon />}
                onClick={() => removeFavoriteMovie(oneMovie)}
              >
                delete from favorites
              </Button>
            ) : (
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "red",
                  "&:hover": {
                    backgroundColor: "blue",
                    color: "red",
                  },
                }}
                startIcon={<FavoriteIcon />}
                onClick={() => addFavoriteMovie(oneMovie)}
              >
                add favorites
              </Button>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MovieDetails;
