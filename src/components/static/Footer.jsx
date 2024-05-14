//MUI ELEMENTOS
import { Box, IconButton } from "@mui/material";

//ICONOS
import GitHubIcon from "@mui/icons-material/GitHub";
import DescriptionIcon from "@mui/icons-material/Description";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const githubLink = "https://github.com/GonzalezMariaSol";
  const repositoryLink = "https://github.com/GonzalezMariaSol/Movie-Searcher";
  const linkedInLink =
    "https://www.linkedin.com/in/sol-gonz%C3%A1lez-8967b5139/";

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Box
      style={{
        backgroundColor: "white",
        height: "5vh",
        display: "flex",
        justifyContent: "space-around",
        borderTop: "1px solid black",
      }}
    >
      <IconButton onClick={() => handleClick(githubLink)} aria-label="GitHub">
        <GitHubIcon sx={{ color: "red" }} />
      </IconButton>

      <IconButton
        onClick={() => handleClick(repositoryLink)}
        aria-label="ProjectLink"
      >
        <DescriptionIcon sx={{ color: "red" }} />
      </IconButton>

      <IconButton
        onClick={() => handleClick(linkedInLink)}
        aria-label="LinkedIn"
      >
        <LinkedInIcon sx={{ color: "red" }} />
      </IconButton>
    </Box>
  );
};

export default Footer;

//!OPTIONAL FOOTER FOR A PAGINATION MAYBE?
      {/* <div
      style={{
        backgroundColor: "white",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        borderTop: "1px solid black",
      }}
    >
      <span role="img" aria-label="clapper board">
        🎬
      </span>
      <span role="img" aria-label="popcorn">
        🍿
      </span>
      <span role="img" aria-label="film projector">
        🎥
      </span>
      <span role="img" aria-label="admission tickets">
        🎟️
      </span>
      <span role="img" aria-label="film frames">
        🎞️
      </span>
      <span role="img" aria-label="popcorn">
        🥤
      </span>
    </div> */}
