const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createNewExpenses,
} = require ('../controllers/expenses-controller');

router.get('/allExpenses', getAllExpenses);
router.post('/createExpenses', createNewExpenses);

module.exports = router;