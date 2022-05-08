import { gql } from '@apollo/client';
export const QUERY_ALL_USERS = gql`
  query getAllUsers {
    users {
      id
      name
      age
      username
    }
  }
`;
