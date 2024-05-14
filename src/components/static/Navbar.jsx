//MUI ELEMENTOS
import { IconButton } from "@mui/material";

//ESTILOS
import styled from "styled-components";

//tomo los valores de iconButton pero los customizo un poco a mi necesidad
const CustomIconButton = styled(IconButton)`
  width: 110px;
  height: 110px;
  padding: 0;
  position: relative;
`;

//tomo los valores de img, pero los customizo a mi necesidad
const CustomImg = styled.img`
  width: 110%;
  height: 110%;
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

const Navbar = () => {
  return (
    <>
      <CustomImg
        src="src/assets/popcornCharacter.png"
        alt="Popcorn"
        style={{
          width: "100px",
          height: "100px",
          marginLeft: "10vh",
          marginRight: "30px",
        }}
      />
      <p
        style={{
          fontSize: "34px",
          fontWeight: "bold",
          fontFamily: "Luckiest Guy, cursive",
          color: "blue",
        }}
      >
        Movie-thon
      </p>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 1.png" alt="Popcorn-tab" />
        <TextOverlay>Home</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 3.png" alt="Popcorn-tab" />
        <TextOverlay>Recent Releases</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 4.png" alt="Popcorn-tab" />
        <TextOverlay>Popular</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 2.png" alt="Popcorn-tab" />
        <TextOverlay>Search</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 5.png" alt="Popcorn-tab" />
        <TextOverlay>Favorites</TextOverlay>
      </CustomIconButton>
    </>
  );
};
export default Navbar;
