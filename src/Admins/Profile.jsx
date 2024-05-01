import React, { useState } from 'react';
import ProfileForm from '../components/ProfileForm';
import ProfileModal from '../components/ProfileModal';
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { admin, profile } from '../assets/images';

const ProfilePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({
    photo: '', 
    email: '', 
    username: '', 
    password: '' 
  });

  const handleUpdateProfile = (updatedData) => {
    setUserData(updatedData);
    setShowModal(false);
    
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setUserData({ ...userData, photo: imageURL });
  };

  return (
    <section className='p-5'>
      <div className="flex ">
        <div className="w-full h-fit border border-gray-200 p-8 rounded-lg shadow-md">
          <h2 className=' text-3xl m-5 font-bold'>Profile</h2>
          <div className="flex items-center gap-40 mx-17">
            <div className=" ml-8 w-1/3">
              <img
                src={userData.photo || admin}
                alt="Profile"
                className="w-32 h-32 rounded-full object-cover"
              />
              <label className="inline-block bg-black text-white rounded-md px-2 py-1 mt-4 cursor-pointer">
                <span className="block">Choose Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <div className=' m-4'>
                <p className=' font-bold text-xl my-2'>Bio</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Tenetur quibusdam expedita quo! Accusamus, officia unde. <span className=' hover:text-purple-600 cursor-pointer'>See more...</span>
                </p>
              </div>

            </div>
            <div className=' mr-5'>
              <div className=' flex flex-col gap-5'>
                <p className="text-lg font-bold"> <FaUserCircle size={30}/> <span className=' text-sm font-mono'> {userData.username}</span></p>
                <p className=" text-lg font-bold"><MdEmail size={30} /> <span className=' text-sm font-mono'>{userData.email}</span></p>
                <p className="text-lg font-bold"><FaLock size={30}/> <span className=' text-sm font-mono'>{"*".repeat(userData.password.length)}</span></p>
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="mt-14 px-2 py-1 bg-black text-white rounded-md "
              >
                Update Profile
              </button>
            </div>
          </div>
        </div>
      
        {showModal && (
          <ProfileModal onClose={() => setShowModal(false)}>
            <ProfileForm userData={userData} onUpdateProfile={handleUpdateProfile} />
          </ProfileModal>
        )}
      </div>
    </section>
  );
};

export default ProfilePage;
