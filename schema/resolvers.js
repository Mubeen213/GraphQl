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
  User: {
    favouriteMovies: () => {
      return _.filter(MoviesList, (movie) => movie.yearOfPublication >= 2000);
    },
  },

  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      console.log(user);
      const lastId = UserList[UserList.length - 1].id;
      user.id = lastId + 1;
      UserList.push(user);
    },
    updateUserName: (parent, args) => {
      const { id, newUserName } = args.input;
      let userUpdated;
      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUserName;
          userUpdated = user;
        }
      });
      return userUpdated;
    },
  },
};

module.exports = { resolvers };
