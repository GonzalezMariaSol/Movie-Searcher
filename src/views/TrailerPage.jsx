import { Box } from "@mui/material";
import { useMovie } from "../hooks";

const TrailerPage = () => {
    const { trailerMovieInfo } = useMovie();
    //!PORQUE NO ME LLEGA LA INFORMACION POR TRAILERPAGE?!

    console.log(trailerMovieInfo.key); //devolveria   key: "dNYgq3BfnsY"
    /*
  y yo luego con esa key deberia crear un link 
  https://www.youtube.com/embed/${trailerMovieInfo.key}
   */
  

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#000",
                padding: "20px",
            }}
        >
            {trailerMovieInfo && (
                <iframe
                    width="800"
                    height="450"
                    src={`https://www.youtube.com/embed/${trailerMovieInfo.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            )}
        </Box>
    );

};
export default TrailerPage;
