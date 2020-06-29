import React, { Component } from 'react';

export class IncomeExpense extends Component {
  render() {
    return (
      <div className='income-expense'>
        <div>
          <h3>Income</h3>
          <p className='income-value'>+0.00€</p>
        </div>

        <div>
          <h3>Expense</h3>
          <p className='expense-value'>-0.00€</p>
        </div>
      </div>
    );
  }
}

export default IncomeExpense;
