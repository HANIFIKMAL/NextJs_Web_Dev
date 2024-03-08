import React from 'react';
import './grid.css';
import Card from './Card';

export default function Grid({ movies, handleMovieClick }) {
    if (!movies.length) return null;

    return (
        <div className="grid-container">
            {
                movies.map((movies) => (
                <div className="grid-item">
                    <Card key={movies.id} movies={movies} onClick={handleMovieClick}/>
                </div>
            ))}
        </div>
    )
}