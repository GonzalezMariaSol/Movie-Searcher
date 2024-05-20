import { createContext, useState } from "react"

export const FavoritesContext = createContext()

const FavoritesContextProvider = ( {children} ) => {

    const [favoritesMovies, setFavoritesMovies] = useState([])

    const addFavoriteMovie = (movie) => {
        setFavoritesMovies( [...favoritesMovies, movie])
    }

    const removeFavoriteMovie = (movie) => {
        const movieToDelete = favoritesMovies.filter((favMovie) => favMovie.id !== movie.id )
        setFavoritesMovies(movieToDelete)
    }

    const isFavorite = (movie) => {
        const movieExist = favoritesMovies.some((favMovie) => favMovie.id === movie.id)
        return movieExist

    }

    const data = {
        favoritesMovies,
        addFavoriteMovie,
        removeFavoriteMovie,
        isFavorite,
    }

    return (
        <FavoritesContext.Provider value={data}> {children} </FavoritesContext.Provider>
    )
}
export default FavoritesContextProvider