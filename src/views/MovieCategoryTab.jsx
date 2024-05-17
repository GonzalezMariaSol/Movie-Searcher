//HOOKS
import { useParams } from "react-router-dom";

//COMPONENTES
import { GridOfMovies } from "../components";

//ESTILOS
import { Box, Typography } from "@mui/material";

const MovieCategoryTab = () => {
  const { movieCategory } = useParams();

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
        <GridOfMovies />
      </Box>
    </Box>
  );
};

export default MovieCategoryTab;
