import React from 'react';

interface Props {}

const AddUser: React.FC<Props> = () => {
  const handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleAddUser}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" />
      <label htmlFor="age">Age (years)</label>
      <input type="number" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
