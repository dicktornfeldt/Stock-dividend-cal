export function calculateYearSum(portfolio) {
  if (Object.keys(portfolio).length !== 0) {
    const yearArray = portfolio.map(stock => {
      const quantity = stock.quantity;
      return stock.dividends
        .map(dividend => dividend.amountPerShare * quantity)
        .reduce((prev, next) => prev + next);
    });
    const sum = yearArray.map(value => value).reduce((prev, next) => prev + next);
    return sum;
  } else {
    return '0';
  }
}
