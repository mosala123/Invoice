import React from 'react';
import { Link } from 'react-router-dom';

const RegisterCustomer = () => {
  return (
    <div className=" d-flex justify-content-center align-items-center  mt-5 mb-5">
      <div className="row w-100">
        <div className="col-md-8 col-lg-6 mx-auto">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title text-start text-primary display-6 mb-3">Customer Registration</h4>

              {/* Registration Form */}
              <form action="#" method="POST">
                {/* Full Name Input */}
                <div className="form-group mb-3">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="form-group mb-3">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>

                {/* Phone Number Input */}
                <div className="form-group mb-3">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Enter your phone number"
                    required
                  />
                </div>

                {/* Address Input */}
                <div className="form-group mb-3">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Enter your address"
                    required
                  />
                </div>

                {/* Date of Birth Input */}
                <div className="form-group mb-3">
                  <label htmlFor="dob">Date of Birth</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="form-group mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter a strong password"
                    required
                  />
                </div>

                {/* Payment Method Dropdown */}
                <div className="form-group mb-3">
                  <label htmlFor="paymentMethod">Payment Method</label>
                  <select className="form-control" id="paymentMethod" required>
                    <option value="">Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    <option value="bankTransfer">Bank Transfer</option>
                  </select>
                </div>

                {/* Billing Address Input */}
                <div className="form-group mb-3">
                  <label htmlFor="billingAddress">Billing Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="billingAddress"
                    placeholder="Enter your billing address"
                  />
                </div>

                {/* Preferred Language Dropdown */}
                <div className="form-group mb-3">
                  <label htmlFor="language">Preferred Language</label>
                  <select className="form-control" id="language" required>
                    <option value="english">English</option>
                    <option value="arabic">Arabic</option>
                    <option value="french">French</option>
                  </select>
                </div>

                {/* Customer Type Dropdown */}
                <div className="form-group mb-3">
                  <label htmlFor="customerType">Customer Type</label>
                  <select className="form-control" id="customerType" required>
                    <option value="individual">Individual</option>
                    <option value="business">Business</option>
                  </select>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-primary w-100">
                  Register
                </button>
              </form>

              {/* Login Link */}
              <div className="text-center mt-3">
                <p className="mb-1">Already have an account?</p>
                <Link to="/logincustomer" className="btn btn-link">
                  Go to Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCustomer;
