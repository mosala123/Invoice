import React from 'react'

const Invoice = () => {
  return (
    <div className="  mt-3 mb-4">
      <h2 className="text-start text-primary mb-4 display-4">Invoice Form</h2>

      {/* Seller Info */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h4>Seller Information</h4>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Company Name"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Address"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Phone"
          />
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Tax Number"
          />
        </div>

        {/* Customer Info */}
        <div className="col-md-6">
          <h4>Customer Information</h4>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Customer Name"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Address"
          />
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Phone"
          />
          <input
            type="email"
            className="form-control mb-2"
            placeholder="Email"
          />
        </div>
      </div>

      {/* Invoice Details */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h4>Invoice Details</h4>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Invoice Number"
          />
        <input
  type="date"
  className="form-control mb-2"
  placeholder="Invoice Date"
/>

<input
  type="time"
  className="form-control mb-2"
  placeholder="Due Time"
/>

        </div>
      </div>

      {/* Products Section */}
      <div className="mb-4">
        <h4>Products</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="text" className="form-control" placeholder="Product Name" /></td>
              <td><input type="number" className="form-control" placeholder="Quantity" /></td>
              <td><input type="number" className="form-control" placeholder="Unit Price" /></td>
              <td><input type="number" className="form-control" placeholder="Total" readOnly /></td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Discount and Tax */}
      <div className="row mb-4">
        <div className="col-md-6">
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Discount (%)"
          />
        </div>
        <div className="col-md-6">
          <input
            type="number"
            className="form-control mb-2"
            placeholder="Tax (%)"
          />
        </div>
      </div>

      {/* Payment Method */}
      <div className="row mb-4">
        <div className="col-md-6">
          <h4>Payment Method</h4>
          <select className="form-control">
            <option value="creditCard">Credit Card</option>
            <option value="cash">Cash</option>
            <option value="bankTransfer">Bank Transfer</option>
          </select>
        </div>
      </div>

      {/* Notes */}
      <div className="mb-4">
        <h4>Notes</h4>
        <textarea
          className="form-control"
          rows="3"
          placeholder="Additional Notes"
        />
      </div>

      {/* Submit Button */}
      <div className="text-center">
        <button className="btn btn-primary">Generate Invoice</button>
      </div>
    </div>
  );
};

export default Invoice;
