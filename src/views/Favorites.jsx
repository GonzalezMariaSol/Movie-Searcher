import { Grid, Typography, IconButton, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

import { useNavigate } from "react-router-dom";

import FavoriteIcon from "@mui/icons-material/Favorite"; //corazon con relleno
import FavoriteBorderIcon from"@mui/icons-material/FavoriteBorder" //corazon vacio


const Favorites = () => {

  const navigate = useNavigate(); // inicializamos función navigate


    // const {addFavoriteMovie, removeFavoriteMovie, } = useContext(FavoritesContext)
    const { addFavoriteMovie, removeFavoriteMovie, isFavorite, favoritesMovies } =
    useContext(FavoritesContext);

    const getMovieImageUrl = (movie) => {
        if (!movie.poster_path) {
          return null;
        }
        return `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
      };
    

  return (
    <>
    <Box sx={{display: 'flex',
      justifyContent: 'center',
      width: '100%',
      textAlign: 'center',
      fontSize:"20px",
      fontFamily: "Luckiest Guy, cursive",
    }}>
    <p>Total of favorite movies saved: {favoritesMovies.length}</p>
    </Box>
      <Grid container spacing={1} sx={{padding:"1vh"}}>
        {favoritesMovies.map((movie, index) => (
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
    </>
  );
};
export default Favorites;
