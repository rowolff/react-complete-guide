import React from 'react';
import { css } from 'styled-components';

import Card from '../UI/Card';

const listStyle = css`
  margin: 2rem auto;
  width: 90%;
  max-width: 40rem;

  & ul {
    list-style: none;
    padding: 1rem;
  }

  & li {
    border: 1px solid #ccc;
    margin: 0.5rem 0;
    padding: 0.5rem;
  }
`;

interface Props {
  users: User[];
}

const UsersList: React.FC<Props> = ({ users }) => {
  return (
    <Card styles={listStyle}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
