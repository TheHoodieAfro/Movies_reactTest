import React from 'react'
import { useState } from 'react';
import { TextField, Box, Button } from '@mui/material';
import MovieList from '../pages/MovieList';


function MovieForm({addMovie}) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [duration, setDuration] = useState("")
    const [genre, setGenre] = useState("")

    const handleClick = () => {
        let _id = Math.floor(Math.random()*100000000)
        let movie = {_id, title, description, duration, genre}
        addMovie(movie)
        setTitle("")
        setDescription("")
        setDuration("")
        setGenre("")
    }

    return (
        <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' }, }}
            noValidate
            autoComplete="off">
                
            <TextField
                id="outlined-basic"
                label="titleTxt"
                variant="outlined"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
            <TextField
                id="outlined-basic"
                label="descriptionTxt"
                variant="outlined"
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
            <TextField
                id="outlined-basic"
                label="durationTxt"
                variant="outlined"
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}/>
            <TextField
                id="outlined-basic"
                label="genreTxt"
                variant="outlined"
                value={genre}
                onChange={(e) => setGenre   (e.target.value)}/>

            <Button variant="contained" onClick={handleClick}>Save movie</Button>
        </Box>
    )
}

export default MovieForm