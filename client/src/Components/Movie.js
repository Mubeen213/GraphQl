import { useQuery } from '@apollo/client';
import { QUERY_ALL_MOVIES } from '../Queries/MovieQuery';

const Movie = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_MOVIES);

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
    data?.movies &&
    data.movies.map((movie) => {
      console.log(movie);
      return <Movie key={movie.id} {...movie} />;
    })
  );
};

export default Movie;
