//COMPONENTES
import { MovieCarousel, QuickDisplayHomeMovies } from "../components";

import { Box } from "@mui/material";

//HOOKS
import { useEffect } from "react";
import useMovie from "../hooks/useMovie";

const Home = () => {
  const {
    getAllPopularMovies,
    getAllTopMovies,
    getAllReleasedMovies,
    releasedMovies,
    popularMovies,
    topRatedMovies,
    currentPage,
  } = useMovie();

  useEffect(() => {
    getAllReleasedMovies(currentPage);
    getAllPopularMovies(currentPage);
    getAllTopMovies(currentPage);
  }, [currentPage]); // se va a ejecutar cada vez se vea una modificacion en currentPage

  return (
    <>
      <MovieCarousel releasedMovies={releasedMovies} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* Expresion ternaria para renderizar los componentes solo si los arrays tienen datos -- el uso de if en jsx no me lo permitia*/}
        {popularMovies.length > 0 && topRatedMovies.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              "& > div": {
                flex: "1 1 100%", // Esto hace que los hijos ocupen el 100% del ancho en pantallas pequeñas
                margin: "10px",
              },
            }}
          >
            {" "}
            <div style={{ flex: "1", marginRight: "10px" }}>
              <QuickDisplayHomeMovies
                title={"Popular Movies"}
                movies={popularMovies}
              />
            </div>
            <div style={{ flex: "1", marginLeft: "10px" }}>
              <QuickDisplayHomeMovies
                title={"Top Rated Movies"}
                movies={topRatedMovies}
              />
            </div>
          </Box>
        )}
      </div>
    </>
  );
};
export default Home;
