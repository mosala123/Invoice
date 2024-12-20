import React from "react";
import imagehome from "./images/ما-هي-إدارة-المشاريع-مع-توضيح-مراحلها-وأنواعها.jpg"
const Home = () => {
  return (
    <div className="container mt-5 mb-5 ">
      {/* Main Title */}
      <div className="text-center mb-4">
        <h1 className="mb-3">Automated Invoice Generation System</h1>
        <p className="text-muted">
          The perfect solution to simplify the management of freelancer projects and track payments easily and efficiently.
        </p>
      </div>

      {/* Features Section */}
      <div className="row mb-5">
        <div className="col-md-6 mt-5">
          <h3 className="mb-3 mt-4">Why Choose Our System?</h3>
          <ul className="list-group">
            <li className="list-group-item">
              ✅ Automatically generate invoices and send them to clients with ease.
            </li>
            <li className="list-group-item">
              ✅ Track payments and update invoice status in real-time.
            </li>
            <li className="list-group-item">
              ✅ Monthly and annual reports displaying financial performance in detail.
            </li>
            <li className="list-group-item">
              ✅ Organize and manage project data professionally.
            </li>
          </ul>
        </div>
        <div className="col-md-6 mt-4">
          <img
            src={imagehome}
            alt="Invoice Management"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>

      {/* System Features Section */}
      <div className="row mb-5">
        <div className="col-12">
          <h3 className="text-center mb-4">System Features</h3>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Invoice Automation</h5>
                  <p className="card-text">
                    Create and send invoices easily without manual intervention.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Payment Tracking</h5>
                  <p className="card-text">
                    Stay up to date with the payment status of all your invoices.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow">
                <div className="card-body">
                  <h5 className="card-title">Performance Reports</h5>
                  <p className="card-text">
                    Get detailed reports that show your financial performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-5">
        <h3 className="mb-3">Are You Ready to Get Started?</h3>
        <p>Join us today and start your journey as a professional freelancer or client.</p>
        <a href="/registerfreelancer" className="btn btn-primary me-3 mb-3">
          Register as a Freelancer
        </a>
        <a href="/registercustomer" className="btn btn-secondary mb-3">
          Register as a Customer
        </a>
      </div>
    </div>
  );
};

export default Home;
