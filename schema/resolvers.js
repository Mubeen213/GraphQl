const { UserList } = require('./MockData');
const { MoviesList } = require('./MockMovies');
const _ = require('lodash');
const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(UserList, { id: Number(id) });
      return user;
    },

    //Movie Resolvers
    movies: () => {
      return MoviesList;
    },

    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(MoviesList, { name });
      return movie;
    },
  },
};

module.exports = { resolvers };
