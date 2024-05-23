import { useNavigate } from "react-router-dom"; 

import { useContext } from "react";

import { FavoritesContext } from "../context/FavoritesContext";

import FavoriteIcon from "@mui/icons-material/Favorite"; //corazon con relleno
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder"; //corazon vacio


//MUI ELEMENTOS
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Avatar,
  IconButton,
} from "@mui/material";

//ICONOS
import { FaRegEye } from "react-icons/fa";

const QuickDisplayHomeMovies = ({ title, movies }) => {
  const { addFavoriteMovie, removeFavoriteMovie, isFavorite } =
  useContext(FavoritesContext);


  const navigate = useNavigate(); // inicializamos funcion navigate

  return (
    <div
      style={{
        margin: "5vw auto",
        border: "1px solid black",
        width: "90%",
      }}
    >
      <Typography
        variant="h6"
        sx={{ backgroundColor: "black", color: "white", textAlign: "center" }}
      >
        {title}
      </Typography>
      <List style={{ overflowY: "auto", maxHeight: "50vh" }}>
        {movies.map((movie) => (
          <ListItem sx={{ borderBottom: "1px solid grey" }} key={movie.id}>
            <Avatar
              alt="Avatar"
              src={`https://image.tmdb.org/t/p/w1280${movie.poster_path}`}
              sx={{ marginRight: "1.5vw" }}
            />
            <ListItemText primary={movie.title} />
            <ListItemSecondaryAction>
              <IconButton aria-label="eye" onClick={() => navigate(`/detail/${movie.id}`)}>
                <FaRegEye style={{ fontSize: "30px" }} />
              </IconButton>
              {isFavorite(movie) ? (
                  <IconButton
                    onClick={() => removeFavoriteMovie(movie)}
                    sx={{
                      color: "red",
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
                      color: "gray",
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
                    <FavoriteBorderIcon />
                  </IconButton>
                )}

            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
};
export default QuickDisplayHomeMovies;
