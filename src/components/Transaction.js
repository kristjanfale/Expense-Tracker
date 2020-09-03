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

          const oldTransactions = JSON.parse(
            localStorage.getItem('transactions')
          ).filter((oldtransaction) => oldtransaction.id !== transaction.id);

          localStorage.setItem('transactions', JSON.stringify(oldTransactions));
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
