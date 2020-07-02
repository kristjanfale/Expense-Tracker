import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const context = useContext(GlobalContext);
  const { transactions } = context;

  // Get only amounts from transactions
  const amount = transactions.map((transaction) => transaction.amount);

  // Filter positive amounts and add them together
  const income = amount
    .filter((item) => item > 0)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  // Filter negative amounts and add them together
  const expense = amount
    .filter((item) => item < 0)
    .reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

  return (
    <div className='income-expense'>
      <div>
        <h3>Income</h3>
        <p className='income-value'>{income.toFixed(2)}€</p>
      </div>

      <div>
        <h3>Expense</h3>
        <p className='expense-value'>{expense.toFixed(2)}€</p>
      </div>
    </div>
  );
};

export default IncomeExpense;
