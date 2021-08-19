const mongoose = require('mongoose');

const { Schema } = mongoose;

const expensesSheme = new Schema({
  text: String,
  isCheck: Boolean,
});

module.exports = Expenses = mongoose.model('expenses', expensesSheme);