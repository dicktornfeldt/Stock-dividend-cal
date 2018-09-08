export const addStockRequest = () => {
  return {
    type: 'ADD_NEW_STOCK_REQUEST',
  };
};

export const addStockRequestSuccess = stock => {
  return {
    type: 'ADD_NEW_STOCK_REQUEST_SUCCESS',
    stock: stock,
  };
};

export const addStockRequestFailed = error => {
  return {
    type: 'ADD_NEW_STOCK_REQUEST_FAILED',
    error,
  };
};
