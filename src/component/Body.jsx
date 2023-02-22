import React from 'react'
import  { useEffect, useState } from 'react'
import MoviesCard from './Movies'
//import axios from "axios";
export default function Body() {

    const [movies, setMovies] = useState([])
    const [searches, setSearch] = useState()

   //const API_URL = "https://api.themoviedb.org/3/"
   
   useEffect(() => {
    fetchData()
    }, [])

    const fetchData = async (searches) => {
            
            await fetch( `https://api.themoviedb.org/3/discover/movie/?api_key=0de7df0c6e79077ad2e0f7ccaffe6234`)
            .then(response => response.json())
            .then(data => setMovies(data.results))        
    }

    const searchMovie = async (e) => {
        e.preventDefault();
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=0de7df0c6e79077ad2e0f7ccaffe6234&query=${searches}`
        );
        const data = await response.json();
        setMovies(data.results);
      };

    console.log(searches)
        


  return (
    <div className='Body'>
        <div className="container">
            <div className='body-header'>
                <h1 className='header-text'>Trending Movies</h1>
                <form className='search-input' onSubmit={searchMovie}>
                    <input
                    className='input--class'
                    type="text" 
                    placeholder='Search Movie'
                    name = "input"
                    onChange={(e) => setSearch(e.target.value)}
            
                    />
    
                    <button className='search-btn'>Search</button>
                </form>
            </div>
        <div>
            </div>
            <div className='movie-container'>
                {
                    movies?.map(movie => (
                    <MoviesCard
                        key={movie.id}
                        movie={movie} 
                    />
                    ))
                    }
            </div>
        </div>
    </div>
  )
}
