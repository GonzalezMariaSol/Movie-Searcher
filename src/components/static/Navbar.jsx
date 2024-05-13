import { IconButton } from "@mui/material";
import styled from "styled-components";

const CustomIconButton = styled(IconButton)`
  width: 110px; /* Tamaño del botón */
  height: 110px; /* Tamaño del botón */
  padding: 0; /* Elimina el relleno interno del botón */
  position: relative; /* Establece la posición relativa para que los elementos absolutos se posicionen con respecto a este botón */
`;

const CustomImg = styled.img`
  width: 110%;
  height: 110%;
  object-fit: contain; /* Ajusta la imagen dentro del contenedor sin cortarla */
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: blue;
  padding: 8px;
  font-family: "Luckiest Guy", cursive; /* Agrega la fuente aquí */
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
          marginRight: "50px",
        }}
      />
      <p style={{ fontSize: "34px", marginLeft: "10vh", color: "blue" }}>
        Movie-thon
      </p>
      <div style={{ flex: 1 }}></div> {/* esto es un espacio vacío */}
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 1.png" alt="Popcorn" />
        <TextOverlay>Home</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 3.png" alt="Popcorn" />
        <TextOverlay>Recent Releases</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 4.png" alt="Popcorn" />
        <TextOverlay>Popular</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 2.png" alt="Popcorn" />
        <TextOverlay>Search</TextOverlay>
      </CustomIconButton>
      <CustomIconButton style={{ marginRight: "50px" }}>
        <CustomImg src="src/assets/single popcon 5.png" alt="Popcorn" />
        <TextOverlay>Favorites</TextOverlay>
      </CustomIconButton>
    </>
  );
};
export default Navbar;
