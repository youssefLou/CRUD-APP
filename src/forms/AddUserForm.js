import React, { useState } from 'react';

const AddUserForm = (props) => {
  const initialFormState = { id: null, name: '', username: '' };
  const [user, setUser] = useState(initialFormState);
  const [errorMessage, setErrorMessage] = useState(''); 

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!user.name || !user.username) {
      setErrorMessage('Name and Username are required fields');
      return;
    }

    props.addUser(user);
    setUser(initialFormState);
    setErrorMessage(''); 

  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Add new user</button>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </form>
  );
};

export default AddUserForm;
