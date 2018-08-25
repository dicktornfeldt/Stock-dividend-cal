const apiUrl = '/api/';

export const addStock = stock => {
  return dispatch => {
    dispatch(addStockRequest(stock));
    return fetch(apiUrl, {
      method: 'POST',
      body: stock,
    }).then(response => {
      console.log(response);

      if (response.ok) {
        response.json().then(data => {
          console.log(data);
          dispatch(addStockRequestSuccess(data.stock[0], data.message));
        });
      } else {
        response.json().then(error => {
          dispatch(addStockRequestFailed(error));
        });
      }
    });
  };
};

export const addStockRequest = stock => {
  return {
    type: 'ADD_NEW_STOCK_REQUEST',
    stock,
  };
};

export const addStockRequestSuccess = (stock, message) => {
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
