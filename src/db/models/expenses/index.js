const mongoose = require('mongoose');

const { Schema } = mongoose;

const expensesSheme = new Schema({
  NameShop: String,
  textCost: Number,
  Data: String,
});

module.exports = Expenses = mongoose.model('expenses', expensesSheme);