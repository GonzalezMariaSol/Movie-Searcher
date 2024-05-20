//REACT
import React, { useEffect } from "react";

//HOOKS
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

import { useNavigate } from "react-router-dom";
import { useContext } from "react";

//MUI
import { Grid, Typography, Button, IconButton, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { FavoritesContext } from "../context/FavoritesContext";

import FavoriteIcon from "@mui/icons-material/Favorite"; //corazon con relleno
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; //corazon vacio

const GridOfMovies = ({ searchedMovie }) => {
  //!PORQUE TENGO QUE PONER searchedMovie COMO PROP, PERO SI LO TRAIA A TRAVES DEL USEMOVIE NO ME LO DEJABA? (lo estoy trayendo con usemovie en searchmovies y pasandoselo aca como prop, wtf?)
  const navigate = useNavigate(); // inicializamos función navigate

  const { movieCategory } = useParams();

  const { addFavoriteMovie, removeFavoriteMovie, isFavorite } =
    useContext(FavoritesContext);

  const {
    getAllReleasedMovies,
    releasedMovies,
    getAllPopularMovies,
    popularMovies,
    currentPage,
    setCurrentPage,
    pages,
  } = useMovie();

  useEffect(() => {
    if (movieCategory === "latestReleases") {
      getAllReleasedMovies(currentPage);
    } else if (movieCategory === "popularMovies") {
      getAllPopularMovies(currentPage);
    }
  }, [movieCategory, currentPage]);

  let movies = [];

  if (movieCategory === "latestReleases") {
    movies = releasedMovies;
  } else if (movieCategory === "popularMovies") {
    movies = popularMovies;
  } else if (searchedMovie.length > 0) {
    movies = searchedMovie;
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [movieCategory]);

  const getMovieImageUrl = (movie) => {
    if (!movie.poster_path) {
      return null;
    }
    return `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  };

  return (
    <>
      <Grid container spacing={1}>
        {movies.map((movie, index) => (
          <Grid item key={index} xs={6} sm={4} md={3} lg={2}>
            <Box
              sx={{
                borderRadius: "0 0 5px 5px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                backgroundColor: "red",
              }}
            >
              <Box
                sx={{
                  height: "60vh",
                  backgroundImage: `url(${getMovieImageUrl(movie)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                  display: "flex",
                  alignItems: "flex-end",
                }}
                onClick={() => navigate(`/detail/${movie.id}`)}
              ></Box>
              <Box
                sx={{
                  backgroundColor: "#f4f4f4",
                  width: "100%",
                  overflow: "hidden",
                  maxHeight: "50px",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "blue",
                    padding: "10px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {movie.title}
                </Typography>
              </Box>
              <Box style={{ backgroundColor: "pink", display: "flex" }}>
                <IconButton
                  onClick={() => navigate(`/detail/${movie.id}`)}
                  sx={{
                    backgroundColor: "black",
                    borderRight: "2px solid blue",
                    color: "#fff",
                    borderRadius: "0",
                    flexGrow: 1,
                    maxHeight: "50px",
                    "&:hover": {
                      backgroundColor: "red",
                      "& svg": {
                        color: "blue",
                      },
                    },
                  }}
                >
                  <VisibilityIcon />
                </IconButton>

                {isFavorite(movie) ? (
                  <IconButton
                    onClick={() => removeFavoriteMovie(movie)}
                    sx={{
                      backgroundColor: "black",
                      borderLeft: "2px solid red",
                      color: "#fff",
                      borderRadius: "0",
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
                      borderLeft: "2px solid red",
                      color: "#fff",
                      borderRadius: "0",
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
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop="5vh">
        <Button
          variant="contained"
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          style={{ marginRight: "10px" }}
        >
          Previous Page
        </Button>
        <Typography
          variant="body1"
          style={{ margin: "0 10px", fontWeight: "bold" }}
        >
          Page {currentPage} of {pages}
        </Typography>
        <Button
          variant="contained"
          onClick={handleNextPage}
          disabled={currentPage === pages}
        >
          Next Page
        </Button>
      </Box>
    </>
  );
};

export default GridOfMovies;
