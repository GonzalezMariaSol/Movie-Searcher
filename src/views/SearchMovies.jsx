import React from "react";

//HOOKS
import useMovie from "../hooks/useMovie";

//COMPONENTES
import { GridOfMovies } from "../components";

//MUI ELEMENTOS
import { TextField, IconButton, InputAdornment, Box } from "@mui/material";

//ICONOS
import { Search } from "@mui/icons-material";

const SearchMovies = () => {
  const { getSearchedMovies, searchedMovie } = useMovie();

  const handleSearchChange = (event) => {
    getSearchedMovies(event.target.value);
  };

  return (
      <Box >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{ width: "50%", margin: "5vh" }}
            label="Search Movie"
            variant="outlined"
            onChange={handleSearchChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <Search />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box sx={{padding:"1vh"}}>
        <GridOfMovies searchedMovie={searchedMovie} />
        </Box>
      </Box>
  );
};

export default SearchMovies;
