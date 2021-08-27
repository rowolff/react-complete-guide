import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UserList from './Components/Users/UsersList';

const App: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const handleAddUser = (user: User) => {
    setUsers((prevUsers) => [user, ...prevUsers]);
  };

  return (
    <div>
      <AddUser onAddUser={handleAddUser} />
      <UserList users={users} />
    </div>
  );
};

export default App;
