import React from 'react'

export default function Movies({movie}) {
  const Image_Path = 'https://image.tmdb.org/t/p/w500/'
  return (
    <div className='movies'>
      {movie.poster_path ? <img src= {`${Image_Path}${movie.poster_path}`} alt ="" className='movie-img'/> : null}
      {movie.title}
    </div>
  )
}
