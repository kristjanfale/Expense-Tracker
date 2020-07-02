import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// INITIAL STATE
const initialState = {
  transactions: [
    { id: 1, description: 'Flower', amount: -20 },
    { id: 2, description: 'Salary', amount: 300.09 },
    { id: 3, description: 'Book', amount: -9.99 },
    { id: 4, description: 'Camera', amount: 150 },
  ],
};

// CREATE CONTEXT
// Import this to other files/components when need to use it
export const GlobalContext = createContext(initialState);

// PROVIDER COMPONENT
//for components to have access to initialState, we need to wrap components in Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
