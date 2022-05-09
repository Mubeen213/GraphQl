import { useMutation, useQuery } from '@apollo/client';

import React, { useState } from 'react';
import { CREATE_USER, QUERY_ALL_USERS } from '../Queries/UserQuery';

const UserData = () => {
  const { data, loading, error, refetch } = useQuery(QUERY_ALL_USERS);
  const [createUser] = useMutation(CREATE_USER);
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [username, setUsername] = useState('');
  const [nationality, setNationality] = useState('');

  if (error) {
    console.log(error);
    return <h1>OOPS! There was an error</h1>;
  }
  if (loading) {
    return <h1>Data is still loading</h1>;
  }

  const User = ({ age, name, username }) => {
    return (
      <div>
        <h1>Username : {username}</h1>
        <h1>Name : {name}</h1>
        <h1>Age : {age}</h1>
      </div>
    );
  };

  return (
    <>
      <div className='create-user'>
        <input
          type='text'
          placeholder='name..'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='username..'
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='number'
          placeholder='Age..'
          onChange={(e) => setAge(Number(e.target.value))}
        />
        <input
          type='text'
          placeholder='Nationality..'
          onChange={(e) => setNationality(e.target.value.toUpperCase())}
        />
        <button
          onClick={() => {
            createUser({
              variables: {
                input: {
                  name,
                  username,
                  age,
                  nationality,
                },
              },
            });
            refetch();
          }}
        >
          Create user
        </button>
      </div>
      <div>
        {data?.users &&
          data.users.map((user) => {
            return <User key={user.id} {...user} />;
          })}
      </div>
    </>
  );
};

export default UserData;
