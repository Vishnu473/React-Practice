const UserList = () => {
  const users = [
    { id: 1, name: 'shiva', age: 23 },
    { id: 2, name: 'Karthikeya', age: '12' },
    { id: 3, name: 'Ganesh', age: 15 },
  ];

  return (
    <div>
      <h3>UsersList</h3>
      {users.map(({ id, name, age }) => (
        <ul key={id}>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
        </ul>
      ))}
    </div>
  );
};

export default UserList;
