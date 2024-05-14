//ESTILOS
import "./App.css";

//COMPONENTES
import { Header, Footer } from "./components/static";
import { Home, LatestReleases } from "./views" 

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
        <Route path="/latestReleases" element={<LatestReleases />} />
        <Route path="/popularMovies" element={<></>} />
        <Route path="/searchMovies" element={<></>} />
        <Route path="/favoriteMovies" element={<></>} />
        <Route path="/movieDetail/:idMovie" element={<></>} />
        <Route path="*" element={<h1>OPSY</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
