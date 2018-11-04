import { useState, useEffect } from 'react';

const CONFIG = {
  API_KEY: 'ce74d10a22f907f894136b130bacdbb1',
  ROOT_URL: 'https://api.themoviedb.org/3/discover/movie?api_key=',
};

function useMovieData(config = {}) {
  const [ moviesData, setMoviesData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ dataPresent, setDataPresent ] = useState(false);

  useEffect(() => {
    if (!dataPresent) {
      fetch(`${CONFIG.ROOT_URL + CONFIG.API_KEY}`, config)
        .then((data) => {
          return data.json();
        })
        .then(({ results }) => {
          setMoviesData(results);
          setDataPresent(true);
        })
        .catch((err) => {
          setError(err);
        });
    }
  }, [ moviesData ]);


  return { moviesData, dataPresent, error };
}

export default useMovieData;