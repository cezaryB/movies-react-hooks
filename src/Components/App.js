import React, { Suspense, lazy, useState } from 'react';
import ReactDOM from "react-dom";
import { MoviesContext } from '../Context';
import '../App.css';
import Header from './Header';
import Movie from './Movie';
import MovieModal from './MovieModal';

const LazyMoviesContainer = lazy(() => import('./MoviesContainer'));

function App() {
  const [ activeMovie, setActiveMovie ] = useState(null);

  return (
    <div className="app-container">
      <MoviesContext.Provider value={{ activeMovie, setActiveMovie }}>
        <Header />
        <Suspense fallback={<div>loading ...</div>}>
          <LazyMoviesContainer>
            {({ moviesData, error }) => {
              if (error) {
                return <div className='error-container'>'Error!'</div>
              }
              return (
                <React.Fragment>
                  <div className='movies-container'>
                    {moviesData.map((movie) => {
                      return (
                        <Movie movieData={movie} key={movie.id} className='movies-container__movie'/>
                      );
                    })}
                  </div>
                  {activeMovie && ReactDOM.createPortal(
                    <MovieModal movieData={moviesData.find(movie => movie.id === activeMovie)} closeModal={() => setActiveMovie(null)} />,
                    document.getElementById('modal')
                  )}
                </React.Fragment>
              );
            }}
          </LazyMoviesContainer>
        </Suspense>
      </MoviesContext.Provider>
    </div>
  );
}

export default App;
