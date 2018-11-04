import React from 'react';
import { MoviesContext } from '../Context';

const CONFIG = {
  SMALL_POSTER_PATH: 'http://image.tmdb.org/t/p/w185/'
};

function Movie({ movieData }) {
  const { id, original_title, overview, poster_path } = movieData;

  return (
    <MoviesContext.Consumer>
      {({ activeMovie, setActiveMovie }) => {
        return (
          <div className='movies-container__movie' onClick={() => setActiveMovie(id)}>
            <img src={CONFIG.SMALL_POSTER_PATH + poster_path} alt={`${original_title}-poster`}/>
            <h2 className='movies-container__movie-title'>{original_title}</h2>
            <p className='movies-container__movie-overview'>{overview}</p>
          </div>
        );
      }}
    </MoviesContext.Consumer>
  );
}

export default Movie;