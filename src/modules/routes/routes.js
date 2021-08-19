const express = require('express');
const router = express.Router();

const {
  getAllExpenses,
  createNewExpenses,
  changeExpensesInfo,
  deleteExpenses,
} = require ('../controllers/expenses-controller');

router.get('/allExpenses', getAllExpenses);
router.post('/createExpenses', createNewExpenses);
router.patch('/changeExpensesInfo', changeExpensesInfo);
router.delete('/deleteExpenses', deleteExpenses);

module.exports = router;