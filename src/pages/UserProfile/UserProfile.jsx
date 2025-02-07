import React, { useContext, useEffect, useState } from 'react';
import './UserProfile.css';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const UserProfile = () => {
  const [profile, setProfile] = useState({
    age: '',
    gender: '',
    address: '',
    guardian: '',
    medicalCondition: ''
  });
  const { url, token } = useContext(StoreContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${url}/api/user/updateprofile`,
        profile,
        { headers: { token } }
      );
      alert(response.data.message || 'Profile updated successfully!');
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(`${url}/api/user/profile`, {
          headers: { token }
        });
        setProfile(response.data.profile || {});
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token, url]);

  return (
    <div className='user-profile'>
      <h2>Complete Your Profile</h2>
      <form onSubmit={handleSubmit} className='profile-form'>
        <div className='form-group'>
          <label htmlFor='age'>Age</label>
          <input
            type='number'
            id='age'
            name='age'
            value={profile.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='gender'>Gender</label>
          <select
            id='gender'
            name='gender'
            value={profile.gender}
            onChange={handleChange}
            required
          >
            <option value='' disabled>Select Gender</option>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Other'>Other</option>
          </select>
        </div>

        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <textarea
            id='address'
            name='address'
            value={profile.address}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className='form-group'>
          <label htmlFor='guardian'>Guardian/Caretaker</label>
          <input
            type='text'
            id='guardian'
            name='guardian'
            value={profile.guardian}
            onChange={handleChange}
            required
          />
        </div>

        <div className='form-group'>
          <label htmlFor='medicalCondition'>Medical Condition</label>
          <textarea
            id='medicalCondition'
            name='medicalCondition'
            value={profile.medicalCondition}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type='submit' className='submit-button'>Save Profile</button>
      </form>
    </div>
  );
};

export default UserProfile;
