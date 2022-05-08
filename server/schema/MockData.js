const UserList = [
  {
    id: 1,
    name: 'Mubeen',
    username: 'Mubeen',
    age: 21,
    nationality: 'INDIA',
    friends: [
      {
        id: 2,
        name: 'Zubair',
        username: 'Zubair',
        age: 21,
        nationality: 'CANADA',
      },
      {
        id: 3,
        name: 'Yaseen',
        username: 'Yaseen',
        age: 21,
        nationality: 'GERMANY',
      },
    ],
  },
  {
    id: 2,
    name: 'Zubair',
    username: 'Zubair',
    age: 21,
    nationality: 'CANADA',
    friends: [
      {
        id: 4,
        name: 'Sameer',
        username: 'Sameer',
        age: 21,
        nationality: 'BRAZIL',
      },
    ],
  },
  {
    id: 3,
    name: 'Yaseen',
    username: 'Yaseen',
    age: 21,
    nationality: 'GERMANY',
  },
  {
    id: 4,
    name: 'Sameer',
    username: 'Sameer',
    age: 21,
    nationality: 'BRAZIL',
    friends: [
      {
        id: 3,
        name: 'Yaseen',
        username: 'Yaseen',
        age: 21,
        nationality: 'GERMANY',
      },
    ],
  },
];

module.exports = { UserList };
