export const addStock = (name, api_id) => {
  return {
    type: 'ADD_STOCK',
    stock: {
      name: name,
      api_id: api_id,
      quantity: '0',
      value: 0,
      dividends: {},
    },
  };
};

export const editStock = (quantity, api_id) => {
  return dispatch => {
    dispatch(dataRequest());
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://www.avanza.se/_mobile/market/stock/${api_id}`
    ).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(dataRequestSuccess(quantity, data.lastPrice, data.dividends, api_id));
        });
      } else {
        response.json().then(error => {
          dispatch(dataRequestFailed(error));
        });
      }
    });
  };
};

export const dataRequest = () => {
  return {
    type: 'DATA_STOCK_REQUEST',
  };
};

export const dataRequestSuccess = (quantity, price, dividends, api_id) => {
  return {
    type: 'DATA_STOCK_REQUEST_SUCCESS',
    quantity,
    price,
    dividends,
    api_id,
  };
};

export const dataRequestFailed = error => {
  return {
    type: 'DATA_STOCK_REQUEST_FAILED',
    error,
  };
};
