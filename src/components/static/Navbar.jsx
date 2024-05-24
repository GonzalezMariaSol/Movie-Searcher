// NAVEGACION
import { useNavigate } from "react-router-dom";

//CUSTOM BTNS
import popcornOne from "../../../public/single popcon 1.png"
import popcornThree from "../../../public/single popcon 3.png"
import popcornFour from "../../../public/single popcon 4.png"
import popcornTwo from "../../../public/single popcon 2.png"
import popcornFive from "../../../public/single popcon 5.png"

// MUI ELEMENTOS
import { IconButton, Box } from "@mui/material";

// ESTILOS
import styled from "styled-components";

const CustomImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;


const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: blue;
  padding: 8px;
  font-family: "Luckiest Guy", cursive;
  font-weight: 400;
  font-style: normal;
  font-size: 16px;
`;

const CustomBox = styled(Box)`
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CustomIconButton = styled(IconButton)`
  flex: 1 1 10%; 
  height: auto;
  padding: 0;
  position: relative;
  margin: 10px 20px;
`;

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <CustomBox>
      <CustomIconButton onClick={() => navigate("/")}>
        <CustomImg src={popcornOne} alt="Popcorn-tab" />
        <TextOverlay>Home</TextOverlay>
      </CustomIconButton>

      <CustomIconButton onClick={() => navigate("/latestReleases")}>
        <CustomImg src={popcornTwo} alt="Popcorn-tab" />
        <TextOverlay>Recent Releases</TextOverlay>
      </CustomIconButton>

      <CustomIconButton onClick={() => navigate("/popularMovies")}>
        <CustomImg src={popcornThree} alt="Popcorn-tab" />
        <TextOverlay>Popular</TextOverlay>
      </CustomIconButton>

      <CustomIconButton onClick={() => navigate("/searchMovies")}>
        <CustomImg src={popcornFour} alt="Popcorn-tab" />
        <TextOverlay>Search</TextOverlay>
      </CustomIconButton>

      <CustomIconButton onClick={() => navigate("/favoriteMovies")}>
        <CustomImg src={popcornFive} alt="Popcorn-tab" />
        <TextOverlay>Favorites</TextOverlay>
      </CustomIconButton>
    </CustomBox>
  );
};

export default Navbar;
