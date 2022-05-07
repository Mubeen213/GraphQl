const { UserList } = require('./Mockdata');

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

module.exports = { resolvers };
