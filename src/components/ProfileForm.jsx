import React, { useState } from 'react';

const ProfileForm = ({ userData, onUpdateProfile }) => {
  const [formData, setFormData] = useState({
    email: userData.email,
    username: userData.username,
    password: userData.password
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateProfile(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <label className="block mb-2 font-mono text-sm font-bold">
        Username
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full"
        />
      </label>
      <label className="block mb-2 font-mono text-sm font-bold">
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full"
        />
      </label>
      <label className="block mb-2 font-mono text-sm font-bold">
        Password
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="border border-gray-300 rounded-md px-3 py-2 mt-2 w-full focus:border-black "
           
        />
      </label>
      <button type="submit" className="bg-black text-white px-4 py-2 rounded-md mt-4">
        Save
      </button>
    </form>
  );
};

export default ProfileForm;
