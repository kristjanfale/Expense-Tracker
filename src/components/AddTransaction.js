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

    const newTransaction = {
      id: uuidv4(),
      description,
      amount: parseInt(amount),
    };

    addTransaction(newTransaction);
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
