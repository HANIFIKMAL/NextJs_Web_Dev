'use client'

import { useState } from "react";
import { BASE_URL } from "./constant";

import Grid from "./component/Grid";
import Modal from "./component/Modal";

import '@style/header.css'
import '@style/global.css'

async function searchMovies(query){
  try {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}`)
    return await response.json();
  } catch(error){
    console.error('Error fetching data in searchMovie', error)
    return []
  }
}

export default function Home(){
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null)

  function handleMovieClick(movies){
    setSelectedMovie(movies)
  }

  function handleCloseModal(){
    setSelectedMovie(null)
  }

  async function handleSearch(e){
    e.preventDefault();
    if (!query) return;
    const results = await searchMovies(query);
    setMovies(results.results)
  }


return (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover Movie
      <br className="max-md:hidden"/>
      <span className='orange_gradient text-center'> Movie Search Tool</span>
    </h1>
    <p className='desc text-center'>
      Discover Movie with this tool
    </p>

    <div className='webtry_header-content_input'>
      <form onSubmit={handleSearch}>
          <input type="text" 
                 value={query} 
                 onChange={(e) => setQuery(e.target.value)}
                 placeholder='Search Your Movie'/>

          <button type='submit'>Search</button>
      </form>

      
    </div>

    <Grid movies = {movies} handleMovieClick = {handleMovieClick}/>

    <Modal movies={selectedMovie} onClose={handleCloseModal} />
    
  </section>
);

}