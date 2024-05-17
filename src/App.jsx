//COMPONENTES
import { Header, Footer } from "./components/static";
import { Home, MovieCategoryTab, SearchMovies } from "./views" 
import { MovieDetails } from "./components";

//ESTILOS
import "./App.css";

//ENRUTADORES
import { BrowserRouter, Routes, Route } from "react-router-dom";


// //!Nose si debo usar esta key
// const APIReadAccessToken =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjgwZDk0OGM3NmQ4MTk1Mzc3NmYxMGJkZjcyMTU4YSIsInN1YiI6IjY2NDIzNzE2NzUxYmNkMTIyMjAxZDI0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XRWsE8_TicEavfOaBPEtFs9jKflHi6u2bdiiGulvnoo";



function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:movieCategory" element={<MovieCategoryTab />} />
        <Route path="/detail/:movieId" element={<MovieDetails />} />
        <Route path="/searchMovies" element={<SearchMovies />} />
        <Route path="/favoriteMovies" element={<></>} />
        <Route path="*" element={<h1>OPSY</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
