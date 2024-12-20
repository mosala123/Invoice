import React from 'react';

const Settings = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Settings</h3>

      {/* تغيير الاسم */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Personal Information</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="name" placeholder="Enter your full name" />
            </div>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </form>
        </div>
      </div>

      {/* تغيير كلمة المرور */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Change Password</h5>
          <form>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">New Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter new password" />
            </div>
            <button type="submit" className="btn btn-primary">Change Password</button>
          </form>
        </div>
      </div>

      {/* إعدادات الإشعارات */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Notification Settings</h5>
          <form>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="emailNotifications" />
              <label className="form-check-label" htmlFor="emailNotifications">
                Receive email notifications
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="smsNotifications" />
              <label className="form-check-label" htmlFor="smsNotifications">
                Receive SMS notifications
              </label>
            </div>
            <button type="submit" className="btn btn-primary mt-3">Save Notifications Settings</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
