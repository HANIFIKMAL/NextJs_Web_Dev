'use client'

import './modal.css';
import Card from './Card'

export default function Modal({movies,onClose}){
    if (!movies) return null;

    return(
        <div className="modal-container">
            <div className="modal-content">
                <h2>{movies.title}</h2>
                <p>{movies.overview}</p>
                <div>
                    <p>Release Date : {movies.release_date}</p>
                    <p>Average Vote : {movies.vote_average}/10</p>
                    <p>Voting Count : {movies.vote_count}</p>
                    <p>Movie URL : {`https://www.themoviedb.org/movie/${movies.id}`}</p>
                </div>
                <button onClick = {onClose}>Close</button>
            </div>
        </div>
    )
}