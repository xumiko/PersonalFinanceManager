
import React, { useState } from 'react';
import './transaction.css';

const Transaction = ({ onClose, onAddTransaction }) => {
  const [formData, setFormData] = useState({
    type: '',
    amount: '',
    category: '',
    date: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddTransaction(formData); // Pass the form data to the parent (Dashboard)

    setFormData({ type: '', amount: '', category: '', date: '', description: '' }); // Reset the form
    onClose();
  };

  return (
    <div className="transaction-form">
      <h2>Add Transaction</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <select
            id="type"
            name="type" 
            value={formData.type}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Type</option>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Category</option>
            <option value="Food">Food</option>
            <option value="Entertainment">Entertainment</option>
            <option value="Transport">Transport</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            required
          />
        </div>

        <button className="t-form-btn" type="submit">Submit</button>
        <button className="t-form-btn" type="button" onClick={onClose}>Close</button>
      </form>
    </div>
  );
};

export default Transaction;
