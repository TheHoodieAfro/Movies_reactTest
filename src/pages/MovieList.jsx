import React, { useState } from 'react'
import movies from '../data/movies.json'
import MovieForm from '../components/MovieForm'

function MovieList({owner}) {

    const [movieList, setMovieList] = useState(movies)

    const renderMovies = () => {
        return movieList.map(movie => <li key={movie._id}>{movie.title}</li>)
    }

    const addMovie = (movie) => {
        var movies = [...movieList]
        movies.push(movie);
        setMovieList(movies)
    }

    return (
        <div>
            <h1>{owner}'s favourites</h1>

            <ul>{renderMovies()}</ul>

            <MovieForm addMovie={addMovie}/>
        </div>
    )
}

export default MovieList