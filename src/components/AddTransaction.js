import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

import { v4 as uuidv4 } from 'uuid';

export const AddTransaction = () => {
  // Component level state
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState(0);

  const context = useContext(GlobalContext);
  const { addTransaction } = context;

  const onSubmit = (e) => {
    e.preventDefault();

    if (description && amount) {
      const newTransaction = {
        id: uuidv4(),
        description,
        amount: +amount,
      };

      addTransaction(newTransaction);

      // Get transactions from Local Storage
      var oldTransactions = JSON.parse(localStorage.getItem('transactions'));
      let transactions = [];

      // If there are no old transactions
      if (!oldTransactions) {
        transactions.push(newTransaction);
        console.log(transactions);
        // If there are old transactions
      } else {
        transactions = [newTransaction, ...oldTransactions];
        console.log(transactions);
      }
      // Save transactions to LS
      localStorage.setItem('transactions', JSON.stringify(transactions));
    }

    setAmount(0);
    setDescription('');
  };

  return (
    <div className='add-transaction'>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder='Enter description...'
          />
        </div>

        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br /> (negative - expense, positive - income)
          </label>
          <input
            type='number'
            step='0.01'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount...'
          />
        </div>
        <input type='submit' value='Add transaction' />
      </form>
    </div>
  );
};

export default AddTransaction;
