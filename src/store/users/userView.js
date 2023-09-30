import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';

const UsersView = () => {
  const { users, isLoading, error } = useSelector(store => store.user);
  console.log(users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name.first} {user.name.last}
        </li>
      ))}
    </ul>
  );
};

export default UsersView;
