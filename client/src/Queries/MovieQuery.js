import { gql } from '@apollo/client';

export const QUERY_ALL_MOVIES = gql`
  query getAllMovies {
    movies {
      id
      name
      yearOfPublication
      isInTheatres
    }
  }
`;

export const GET_MOVIE_BY_NAME = gql`
  query getmovie($name: String!) {
    movie(name: $name) {
      id
      name
      yearOfPublication
      isInTheatres
    }
  }
`;
