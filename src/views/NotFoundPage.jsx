import { Box } from "@mui/material";
import popcornNotFound from "../../public/popcorn-not-found.png"; 

const NotFoundPage = () => {
  return (
    <Box
    style={{
        margin: "0",
        padding: "0",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    }}
>
    <h1 style={{color:"red"}}>The popcorn...</h1>
    <Box
        style={{
            width: "50%",
            minHeight: "90vh",
            backgroundImage: `url(${popcornNotFound})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
        }}
    ></Box>
    <h1 style={{color:"blue"}}>...was not found.</h1>
</Box>
  );
};

export default NotFoundPage;
