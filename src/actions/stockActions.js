export const addStock = (name, api_id) => {
  return dispatch => {
    dispatch(dataRequest());
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://www.avanza.se/_mobile/market/stock/${api_id}`
    ).then(response => {
      if (response.ok) {
        response.json().then(data => {
          dispatch(dataRequestSuccess(name, data.lastPrice, data.dividends, api_id));
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

export const dataRequestSuccess = (name, price, dividends, api_id) => {
  // remove object
  const dividends2018 = dividends.filter(item => !item.exDate.includes('2017'));

  return {
    type: 'DATA_STOCK_REQUEST_SUCCESS',
    stock: {
      name,
      price,
      dividends: dividends2018,
      api_id,
      quantity: '1',
      value: price,
    },
  };
};

export const dataRequestFailed = error => {
  return {
    type: 'DATA_STOCK_REQUEST_FAILED',
    error,
  };
};

export const editStock = (quantity, api_id) => {
  return {
    type: 'EDIT_STOCK',
    quantity,
    api_id,
  };
};

export const deleteStock = api_id => {
  return {
    type: 'DELETE_STOCK',
    api_id,
  };
};
