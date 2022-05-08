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
