import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const context = useContext(GlobalContext);

  const { transactions } = context;

  let balance = 0;
  transactions.map((transaction) => {
    return (balance += transaction.amount);
  });

  return (
    <div className='balance'>
      <h4>My Balance</h4>
      <h1 id='balance'>{balance.toFixed(2)}€</h1>
    </div>
  );
};

export default Balance;
