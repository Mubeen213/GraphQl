const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    yearOfPublication: Int!
    isInTheatres: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie]!
    movie(name: String!): Movie
  }

  type Mutation {
    createUser(input: createUserInput!): User
    updateUserName(input: updateUserNameInput!): User
    deleteUser(id: ID!): User
  }

  input updateUserNameInput {
    id: ID!
    newUserName: String!
  }
  input createUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = INDIA
  }
  enum Nationality {
    INDIA
    CANADA
    GERMANY
    BRAZIL
  }
`;

module.exports = { typeDefs };
