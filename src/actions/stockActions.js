export const addStock = (name, api_id) => {
  return dispatch => {
    dispatch(dataRequest());
    return fetch(
      `https://limitless-garden-26844.herokuapp.com/https://www.avanza.se/_mobile/market/stock/${api_id}`
    ).then(response => {
      if (response.ok) {
        response.json().then(data => {
          let sector = '';
          if (data.company.sector) {
            sector = data.company.sector;
          }
          dispatch(dataRequestSuccess(name, data.lastPrice, data.dividends, api_id, sector));
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

export const dataRequestSuccess = (name, price, dividends, api_id, sector) => {
  // remove object
  const decodedName = name.replace(/&amp;/g, '&');

  return {
    type: 'DATA_STOCK_REQUEST_SUCCESS',
    stock: {
      name: decodedName,
      price,
      dividends,
      api_id,
      quantity: '1',
      value: price,
      sector,
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
