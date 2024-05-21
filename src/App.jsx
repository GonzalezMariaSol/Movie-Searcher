//COMPONENTES
import { Header, Footer } from "./components/static";
import {
  Home,
  MovieCategoryTab,
  SearchMovies,
  Favorites,
  TrailerPage,
} from "./views";
import FavoritesContextProvider from "./context/FavoritesContext";
import { MovieDetails } from "./components";

//ESTILOS
import "./App.css";

//ENRUTADORES
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <FavoritesContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:movieCategory" element={<MovieCategoryTab />} />
          <Route path="/searchMovies" element={<SearchMovies />} />
          <Route path="/favoriteMovies" element={<Favorites />} />
          <Route path="/detail/:movieId" element={<MovieDetails />} />
          <Route path="/trailer/:videoId" element={<TrailerPage />} />
          <Route path="*" element={<h1>OPSY</h1>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FavoritesContextProvider>
  );
}

export default App;
