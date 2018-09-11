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
