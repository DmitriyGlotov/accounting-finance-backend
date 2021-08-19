const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createNewTasks,
} = require ('../controllers/task-controller');

router.get('/allTasks', getAllTasks);
router.post('/createTask', createNewTasks);

module.exports = router;