export const addStock = (name, api_id) => {
  return dispatch => {
    dispatch(dataRequest());
    return fetch(
      `https://limitless-garden-26844.herokuapp.com/https://www.avanza.se/_mobile/market/stock/${api_id}`
    ).then(response => {
      if (response.ok) {
        response.json().then(data => {
          // set sector if it is exits
          let sector = '';
          if (data.company.sector) {
            sector = data.company.sector;
          }

          // set currency multipliers for always show in SEK
          let currency_multiply = 1;
          if (data.currency === 'EUR') {
            currency_multiply = 10.3;
          } else if (data.currency === 'NOK') {
            currency_multiply = 1.08;
          } else if (data.currency === 'DKK') {
            currency_multiply = 1.38;
          }

          const price = (data.lastPrice * currency_multiply).toFixed(2);
          const price_int = Number(price);

          dispatch(
            dataRequestSuccess(name, price_int, data.dividends, api_id, sector, currency_multiply)
          );
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

export const dataRequestSuccess = (name, price, dividends, api_id, sector, currency_multiply) => {
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
      currency_multiply,
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
