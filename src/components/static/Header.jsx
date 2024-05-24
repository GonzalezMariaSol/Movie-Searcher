// COMPONENTES
import { Navbar } from "./";

//CUSTOM BTNS
import popEatingPopcorn from "../../../public/popcornCharacter.png";

// MUI ELEMENTOS
import { AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";
import { Box } from "@mui/material";

// ESTILOS
import styled from "styled-components";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // tomo los valores de img, pero los customizo a mi necesidad
  const CustomImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `;

  return (
    <AppBar
      position="static"
      style={{
        background:
          "repeating-linear-gradient(to bottom, red, red 50%, white 50%, white)",
        backgroundSize: "100% 50px",
      }}
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "center",
          width: "100%",
          padding: isMobile ? "0 10px" : "0 20px",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
        }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CustomImg
            src={popEatingPopcorn}
            alt="Popcorn"
            style={{
              width: "15vh",
              height: "15vh",
            }}
          />
          <p
            style={{
              fontSize: "34px",
              fontWeight: "bold",
              fontFamily: "Luckiest Guy, cursive",
              color: "blue",
              margin: "2vh",
            }}
          >
            Movie-thon
          </p>
        </Box>
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
