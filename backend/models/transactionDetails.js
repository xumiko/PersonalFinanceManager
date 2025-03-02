const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
type: { type: String, required: true, enum: ['Income', 'Expense'] },
  amount: { type: Number, required: true },
  category: { type: String, required: true, enum: ['Food', 'Entertainment', 'Transport', 'Others'] },
  date: { type: Date, required: true },
  description: { type: String, required: true },
});

const TransactionDetails = mongoose.model('TransactionDetails', transactionSchema);

module.exports = TransactionDetails;

