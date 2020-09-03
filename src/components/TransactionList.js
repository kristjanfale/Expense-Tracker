import React, { useContext, useEffect } from 'react';
import Transaction from './Transaction';

import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
  const context = useContext(GlobalContext);
  const { transactions, getTransactions } = context;

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='transaction'>
      <h3>History</h3>
      <ul className='transaction-list'>
        {transactions.length !== 0 ? (
          transactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <p>No transactions</p>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
