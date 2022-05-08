import { useLazyQuery, useQuery } from '@apollo/client';
import { useState } from 'react';
import { QUERY_ALL_MOVIES, GET_MOVIE_BY_NAME } from '../Queries/MovieQuery';

const Movie = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);
  const [fetchMovie, { data: MovieSearchedData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  const [movieSearched, setMovieSearched] = useState('');

  const Movie = ({ name, yearOfPublication, isInTheatres }) => {
    return (
      <div className='movies'>
        <h1>Name: {name}</h1>
        <h1>yearOfPublication: {yearOfPublication}</h1>
        <h1>isInTheatres: {isInTheatres}</h1>
      </div>
    );
  };
  return (
    <>
      <div className='search-bar'>
        <input type='text' onChange={(e) => setMovieSearched(e.target.value)} />
        <button
          onClick={() =>
            fetchMovie({
              variables: {
                name: movieSearched,
              },
            })
          }
        >
          Search
        </button>
      </div>
      <div>
        {MovieSearchedData && (
          <div>
            <h1>Woah! you movie exist</h1>
            <h1>MovieName: {MovieSearchedData.movie.name}</h1>
          </div>
        )}
        {movieError && <h1>No searched matches</h1>}
      </div>
      <div>
        {data?.movies &&
          data.movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />;
          })}
      </div>
    </>
  );
};

export default Movie;
