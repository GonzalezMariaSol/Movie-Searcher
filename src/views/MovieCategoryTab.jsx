import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { GridOfMovies } from "../components";
import { Box, Typography } from "@mui/material";

const MovieCategoryTab = () => {
  const apiKey = "d680d948c76d81953776f10bdf72158a";

  const { movieCategory } = useParams();

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let moviesUrl = "";
        if (movieCategory === "latestReleases") {
          moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
        } else if (movieCategory === "popularMovies") {
          moviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`;
        }

        const response = await axios.get(moviesUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [movieCategory]);

  return (
    <Box padding="20px">
      <Typography variant="h4" gutterBottom textAlign="center">
        {movieCategory === "latestReleases"
          ? "Recent Releases"
          : "Popular Movies"}
      </Typography>

      <GridOfMovies movies={movies} />
    </Box>
  );
};

export default MovieCategoryTab;
