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

export const CREATE_USER = gql`
  mutation createUser($input: createUserInput!) {
    createUser(input: $input) {
      id
      name
      username
      age
      nationality
    }
  }
`;
