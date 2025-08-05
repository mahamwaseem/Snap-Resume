const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
  userId: String,
  amountPaid: Number,
  transactionId: String,
  paidAt: Date,
});

module.exports = mongoose.model('Payment', PaymentSchema);
