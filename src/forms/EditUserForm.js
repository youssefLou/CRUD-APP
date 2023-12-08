import React, { useState, useEffect } from 'react';

const EditUserForm = (props) => {
  const [user, setUser] = useState(props.currentUser);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

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

    setErrorMessage('');

    props.updateUser(user.id, user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}

      <button>Update user</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};

export default EditUserForm;
