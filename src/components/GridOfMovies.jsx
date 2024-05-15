import { Grid, Typography, IconButton, Box } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const GridOfMovies = ({ movies }) => {
  const getMovieImageUrl = (movie) => {
    if (!movie.poster_path) {
      return null;
    }
    return `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;
  };

  return (
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
              backgroundColor:"red"
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
  );
};

export default GridOfMovies;