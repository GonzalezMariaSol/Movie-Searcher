//COMPONENTS
import "./App.css";
import { Header } from "./components/static";
import { Home } from "./views"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recentReleases" element={<></>} />
        <Route path="/popular" element={<></>} />
        <Route path="/search" element={<></>} />
        <Route path="/favorites" element={<></>} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
