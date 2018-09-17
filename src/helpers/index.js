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

export function groupDividendMonth(portfolio) {
  if (Object.keys(portfolio).length !== 0) {
    const groups = portfolio.map(stock => {
      return stock.dividends.reduce((i, date) => {
        const month = date.exDate.split('-')[1];
        i[month]
          ? i[month].data.push(date)
          : (i[month] = {
              amountPerShare: date.amountPerShare,
              quantity: stock.quantity,
              name: stock.name,
              month: month,
            });
        return i;
      }, {});
    });
    const result = Object.keys(groups).map(keys => {
      return groups[keys];
    });
    return result;
  } else {
    return null;
  }
}

export function calcDividendMonth(dividends, month) {
  const m = dividends.filter(outer => outer[month]).map(outer => outer[month]);

  if (m.length > 0) {
    return m
      .map(dividend => dividend.amountPerShare * dividend.quantity)
      .reduce((prev, next) => prev + next);
  } else {
    return 0;
  }
}
