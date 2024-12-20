import React from 'react';
import { Link } from 'react-router-dom';

const LoginCustomer = () => {
  return (
    <div className="container   mt-5 mb-5 vh-100">
      <div className="row w-100">
        <div className="col-md-8 col-lg-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-center">Login</h4>

              <form>
                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label"  >
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

                {/* Password Input */}
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

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

              {/* Registration Link */}
              <div className="text-center mt-3">
                <p className="mb-1">Don't have an account?</p>
                <Link to="/registercustomer" className="btn btn-link">
                  Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCustomer;
