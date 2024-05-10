import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

const AddUserModal = ({ visible, onAdd, onCancel }) => {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    password: '',
    image: null,
    joinDate:'',
    status:''
  });

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    setNewUser(prevUser => ({
      ...prevUser,
      [fieldName]: value
    }));
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0]; 
    setNewUser(prevUser => ({
      ...prevUser,
      image: file 
    }));
  };

  const handleAddUser = () => {
    if (newUser.image) {
      const imageURL = URL.createObjectURL(newUser.image);
      setNewUser(prevUser => ({
        ...prevUser,
        image: imageURL
      }));
    }
    onAdd(newUser);
    setNewUser({
      name: '',
      email: '',
      password: '',
      image: null,
      joinDate:'',
      status:''
    });
  };

  return (
    <Dialog visible={visible} onHide={onCancel} header="Add User">
      <div className="p-fluid">
        <div className="p-field">
          <label htmlFor="id">ID</label>
          <InputText type='text' id="id" onChange={(e) => handleInputChange(e, 'id')} />
        </div>
        <div className="p-field">
          <label htmlFor="image">Photo</label>
          <InputText type='file' id="image" onChange={handleFileInputChange} />
        </div>
        <div className="p-field">
          <label htmlFor="name">Name</label>
          <InputText id="name" value={newUser.name} onChange={(e) => handleInputChange(e, 'name')} />
        </div>
        <div className="p-field">
          <label htmlFor="email">Email</label>
          <InputText id="email" value={newUser.email} onChange={(e) => handleInputChange(e, 'email')} />
        </div>
        <div className="p-field">
          <label htmlFor="password">Password</label>
          <InputText id="password" value={newUser.password} onChange={(e) => handleInputChange(e, 'password')} />
        </div>
        <div className="p-field">
          <label htmlFor="status">Status</label>
          <InputText id="status" value={newUser.status} onChange={(e) => handleInputChange(e, 'status')} />
        </div>
        <div className="p-field">
          <label htmlFor="join">Join Date</label>
          <InputText id="join" type='date' value={newUser.joinDate} onChange={(e) => handleInputChange(e, 'join')} />
        </div>
      </div>
      <div className="p-dialog-footer flex justify-around items-center">
        <Button label="Add" onClick={handleAddUser} className=" bg-indigo-800 text-white" />
        <Button label="Cancel" onClick={onCancel} className="p-button-secondary" />
      </div>
    </Dialog>
  );
};

export default AddUserModal;
