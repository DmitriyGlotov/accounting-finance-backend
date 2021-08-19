const Task = require('../../db/models/task/index');

module.exports.getAllTasks = (req, res, next) => {
  Task.find().then(result => {
    res.send({ data: result });
  });
};

module.exports.createNewTasks = (req, res, next) => {
  if (req.body.hasOwnProperty('text') && req.body.hasOwnProperty('isCheck')){
    const task = new Task(req.body);
    task.save().then(result => {
      Task.find().then(result => {
        res.send({ data: result });
      });
    });
  } else res.status(422).send('Error! Params not correct');
};