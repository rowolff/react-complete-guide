import React, { useState } from 'react';
import { css } from 'styled-components';

import Card from '../UI/Card';
import Button from '../UI/Button';

const formStyle = css`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;

  & label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  & input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
  }

  & input:focus {
    outline: none;
    border-color: #4f005f;
  }
`;

interface Props {
  onAddUser: (user: User) => void;
}

const AddUser: React.FC<Props> = ({ onAddUser }) => {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');

  const handleAddUser = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const parsedAge = Number.parseInt(age);
    const inputValid = name.trim().length > 0 && parsedAge > 0;
    if (inputValid) {
      const id = Math.random().toString();
      onAddUser({ id, name, age: parsedAge });
      setName('');
      setAge('');
    }
  };

  const handleUserNameChange = (event: React.FormEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  const handleAgeChange = (event: React.FormEvent<HTMLInputElement>) => {
    setAge(event.currentTarget.value);
  };

  return (
    <Card styles={formStyle}>
      <form onSubmit={handleAddUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={name}
          onChange={handleUserNameChange}
        />
        <label htmlFor="age">Age (years)</label>
        <input type="number" id="age" value={age} onChange={handleAgeChange} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
