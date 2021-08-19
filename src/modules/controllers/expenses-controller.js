const Expenses = require('../../db/models/expenses/index');

module.exports.getAllExpenses = (req, res, next) => {
  Expenses.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewExpenses = (req, res, next) => {
  if (req.body.hasOwnProperty('text') && req.body.hasOwnProperty('isCheck')){
    const expenses = new Expenses(req.body);
    expenses.save().then(result => {
      Expenses.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};