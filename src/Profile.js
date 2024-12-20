import React, { useState, useEffect } from 'react';

const Profile = ({ userType }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // هنا يمكنك جلب البيانات من API بناءً على نوع المستخدم
    if (userType === 'customer') {
      setUserData({
        name: 'John Doe',
        email: 'john@example.com',
        phone: '123-456-7890',
        address: '123 Main St',
        customerType: 'Individual',
      });
    } else if (userType === 'freelancer') {
      setUserData({
        name: 'Alice Smith',
        email: 'alice@example.com',
        phone: '987-654-3210',
        address: '456 Second St',
        profession: 'Web Developer',
        level: 'Mid-Level Freelancer',
      });
    }
  }, [userType]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-start text-primary mb-4">Profile</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Name</h4>
          <p>{userData.name}</p>
        </div>
        <div className="col-md-6">
          <h4>Email</h4>
          <p>{userData.email}</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <h4>Phone</h4>
          <p>{userData.phone}</p>
        </div>
        <div className="col-md-6">
          <h4>Address</h4>
          <p>{userData.address}</p>
        </div>
      </div>

      {userType === 'freelancer' && (
        <div className="row">
          <div className="col-md-6">
            <h4>Profession</h4>
            <p>{userData.profession}</p>
          </div>
          <div className="col-md-6">
            <h4>Level</h4>
            <p>{userData.level}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
