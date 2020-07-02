import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const context = useContext(GlobalContext);
  const { deleteTransaction } = context;

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li
      className={`transaction-item ${
        transaction.amount < 0 ? 'negative' : 'positive'
      }`}
    >
      <span
        className='delete'
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        X
      </span>
      {transaction.description}{' '}
      <span>
        {sign}
        {Math.abs(transaction.amount)}€
      </span>
    </li>
  );
};

export default Transaction;
