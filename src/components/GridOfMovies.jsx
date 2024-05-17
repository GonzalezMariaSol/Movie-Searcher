//REACT
import React, { useEffect } from "react";

//HOOKS
import { useParams } from "react-router-dom";
import useMovie from "../hooks/useMovie";

//MUI
import { Grid, Typography, Button, IconButton, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const GridOfMovies = () => {

  const { movieCategory } = useParams();

  const { getAllReleasedMovies, releasedMovies, getAllPopularMovies, popularMovies, currentPage, setCurrentPage, pages} = useMovie();

  useEffect(() => {
    if(movieCategory === "latestReleases"){
      getAllReleasedMovies(currentPage)
    } else if (movieCategory === "popularMovies"){
      getAllPopularMovies(currentPage)
    }
  }, [movieCategory, currentPage]);
  
  const movies = movieCategory === "latestReleases" ? releasedMovies : popularMovies;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(()=> {
    setCurrentPage(1) 
  }, [movieCategory])


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
                onClick={() => console.log("Hola")}
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

              <IconButton
                sx={{
                  backgroundColor: "blue",
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
