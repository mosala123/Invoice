import React from 'react';

// تمثيل بيانات الفواتير
const invoices = [
  { id: 1, number: 'INV-001', customer: 'John Doe', date: '2024-12-19', total: 100 },
  { id: 2, number: 'INV-002', customer: 'Jane Smith', date: '2024-12-18', total: 250 },
  { id: 3, number: 'INV-003', customer: 'Ali Hassan', date: '2024-12-17', total: 300 },
];

const InvoicesAll = () => {
  return (
    <div className="mt-3 mb-4">
      <h2 className="text-start text-primary mb-4 display-4">All Invoices</h2>

      {/* جدول الفواتير */}
      <table className="table">
        <thead>
          <tr>
            <th>Invoice Number</th>
            <th>Customer</th>
            <th>Date</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.number}</td>
              <td>{invoice.customer}</td>
              <td>{invoice.date}</td>
              <td>{invoice.total} USD</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesAll;
