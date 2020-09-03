export default (state, action) => {
  switch (action.type) {
    case 'GET_TRANSACTIONS':
      return {
        ...state,
        transactions: action.payload,
      };
    case 'DELETE_TRANSACTION':
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload // action.payload = {id}
        ),
      };
    case 'ADD_TRANSACTION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
