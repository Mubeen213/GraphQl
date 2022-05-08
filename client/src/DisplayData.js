import { useQuery } from '@apollo/client';

import React from 'react';
import { QUERY_ALL_USERS } from './Queries/UserQuery';

const DisplayData = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);

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
    <div>
      {data?.users &&
        data.users.map((user) => {
          return <User key={user.id} {...user} />;
        })}
    </div>
  );
};

export default DisplayData;
