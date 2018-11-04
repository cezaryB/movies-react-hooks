import useMovieData from '../Hooks/useMovieData';

function MoviesContainer(props) {
  const { moviesData, dataPresent, error } = useMovieData();
  return dataPresent && props.children({ moviesData, error });
}

export default MoviesContainer;