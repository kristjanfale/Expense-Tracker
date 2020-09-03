import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// INITIAL STATE
const initialState = {
  transactions: [],
};

// CREATE CONTEXT
// Import this to other files/components when need to use it
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENT
//for components to have access to initialState, we need to wrap components in Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // ACTIONS

  // Get transactions
  function getTransactions() {
    const transactions = JSON.parse(localStorage.getItem('transactions'));

    if (transactions) {
      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: transactions,
      });
    }
  }

  // Delete transaction
  function deleteTransaction(id) {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  }

  // Add transaction
  function addTransaction(transaction) {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
