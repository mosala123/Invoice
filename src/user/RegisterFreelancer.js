import React from 'react';

const RegisterFreelancer = () => {
  return (
    <div className=" mt-4 mb-5 d-flex justify-content-center align-items-center vh-100 ">
      <div className="card shadow p-4" style={{ width: '500px' }}>
        <h3 className="text-center mb-4">Register as Freelancer</h3>
        <form>
          {/* Full Name */}
          <div className="mb-3">
            <label htmlFor="fullName" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="fullName"
              placeholder="Enter your full name"
              required
            />
          </div>

          {/* Email Address */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address */}
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="Enter your address"
              required
            />
          </div>

          {/* Profession */}
          <div className="mb-3">
            <label htmlFor="profession" className="form-label">
              Profession
            </label>
            <select className="form-select" id="profession" required>
              <option value="" disabled selected>
                Select your profession
              </option>
              <option value="developer">Web Developer</option>
              <option value="designer">Graphic Designer</option>
              <option value="writer">Content Writer</option>
              <option value="marketer">Digital Marketer</option>
            </select>
          </div>

          {/* Freelancer Level */}
          <div className="mb-3">
            <label htmlFor="level" className="form-label">
              Freelancer Level
            </label>
            <select className="form-select" id="level" required>
              <option value="" disabled selected>
                Select your level
              </option>
              <option value="junior">Junior Freelancer</option>
              <option value="mid">Mid-Level Freelancer</option>
              <option value="senior">Senior Freelancer</option>
              <option value="pro">Freelancer Pro</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-3 text-center">
          <p className="text-muted">
            Already have an account? <a href="/loginfreelancer">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterFreelancer;
