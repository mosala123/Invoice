import React from 'react';

const LoginFreelancer = () => {
  return (
    <div className="d-flex  mb-5  justify-content-center align-items-center vh-100  ">
      <div className="card shadow p-4" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Freelancer Login</h3>
        <form>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email" required
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password" required
            />
          </div>

          {/* Submit Button */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-3 text-center">
          <p className="text-muted">
            Don't have an account? <a href="/registerfreelancer">Sign Up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFreelancer;
