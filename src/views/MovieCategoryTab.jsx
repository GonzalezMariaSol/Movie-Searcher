import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { GridOfMovies } from "../components";
import { Box, Typography } from "@mui/material";

const MovieCategoryTab = () => {
  const apiKey = "d680d948c76d81953776f10bdf72158a";

  const { movieCategory } = useParams();

  const [movies, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let moviesUrl = "";
        if (movieCategory === "latestReleases") {
          moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${currentPage}`;
        } else if (movieCategory === "popularMovies") {
          moviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${currentPage}`;
        }

        
        const response = await axios.get(moviesUrl);
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [movieCategory, currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(()=> {
    setCurrentPage(1) 
  }, [movieCategory])


  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box padding="20px">
        <Typography variant="h4" gutterBottom textAlign="center">
          {movieCategory === "latestReleases"
            ? "Recent Releases"
            : "Popular Movies"}
        </Typography>
        <GridOfMovies movies={movies} onNextPage={handleNextPage} onPrevPage={handlePrevPage} currentPage={currentPage} totalPages={totalPages} />
      </Box>
    </Box>
  );
};

export default MovieCategoryTab;
