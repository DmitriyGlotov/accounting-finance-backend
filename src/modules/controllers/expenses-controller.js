const Expenses = require('../../db/models/expenses/index');

module.exports.getAllExpenses = (req, res, next) => {
  Expenses.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewExpenses = (req, res, next) => {
  if (req.body.hasOwnProperty('NameShop') && req.body.hasOwnProperty('textCost') && req.body.hasOwnProperty('Data')){
    const expenses = new Expenses(req.body);
    expenses.save().then(result => {
      Expenses.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};

module.exports.changeExpensesInfo = (req, res, next) => {
  if (req.body._id) {
    Expenses.updateOne({_id: req.body._id}, req.body).then(result => {
      Expenses.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};

module.exports.deleteExpenses = (req, res, next) => {
  if (req.query._id) {
    Expenses.deleteOne({_id: req.query._id}).then(result => {
      Expenses.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};