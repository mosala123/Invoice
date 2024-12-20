import React from 'react';

const Reports = () => {
  return (
    <div className="container mt-5">
      <h3 className="mb-4">Dashboard - Reports</h3>
      
      {/* تقرير التسجيلات */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">User Registration Reports</h5>
          <p>Total Registered Users: 1500</p>
          <p>New Users Today: 50</p>
          <p>Breakdown:</p>
          <ul>
            <li>Customers: 900</li>
            <li>Freelancers: 600</li>
          </ul>
        </div>
      </div>

      {/* تقرير الدفع */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Payment Reports</h5>
          <p>Total Payments Processed: $25,000</p>
          <p>Payments Today: $500</p>
          <p>Breakdown:</p>
          <ul>
            <li>Credit Cards: $10,000</li>
            <li>PayPal: $8,000</li>
            <li>Bank Transfer: $7,000</li>
          </ul>
        </div>
      </div>

      {/* تقرير النشاط */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Activity Reports</h5>
          <p>Active Projects: 100</p>
          <p>Freelancers Assigned: 80</p>
          <p>New Job Listings: 10</p>
        </div>
      </div>

      {/* تقرير العملاء */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Customer Reports</h5>
          <p>Total Active Customers: 700</p>
          <p>Individual Customers: 500</p>
          <p>Business Customers: 200</p>
        </div>
      </div>

      {/* تقرير الفريلانسر */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Freelancer Reports</h5>
          <p>Total Active Freelancers: 600</p>
          <p>Junior Freelancers: 200</p>
          <p>Mid-Level Freelancers: 250</p>
          <p>Senior Freelancers: 150</p>
        </div>
      </div>
    </div>
  );
};

export default Reports;
