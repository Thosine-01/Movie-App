import React from 'react'


export default function Aside() {


  
  return (
    <div className='Aside'>
        <h1 className='logo'>Toms<span className='small-logo'>Movies</span></h1>
        <div className="container">
            <div className="filter--header">FIlter</div>
            <div className="genres">Genres</div>
            <ul className='genres-list'>
              <li><a>Popular</a></li>
              <li><a>Theater</a></li>
              <li><a>Kids</a></li>
              <li><a>Drama</a></li>
              <li><a>Comedy</a></li>
            </ul>
        </div>
       
    </div>
  )
}
