import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <AppBar
      position="static"
      style={{
        background:
          "repeating-linear-gradient(to bottom, red, red 50%, white 50%, white)",
        backgroundSize: "100% 50px", // Ajusta el ancho y alto de las líneas
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center", // Alinea verticalmente al centro
          width: "100%", // Usa el ancho completo
        }}
      >
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
