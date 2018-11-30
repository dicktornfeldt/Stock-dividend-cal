// export function calculateYearSum(portfolio) {
//   if (Object.keys(portfolio).length !== 0) {
//     const yearArray = portfolio.map(stock => {
//       const quantity = stock.quantity;
//       return stock.dividends
//         .map(dividend => dividend.amountPerShare * quantity)
//         .reduce((prev, next) => prev + next);
//     });
//     const sum = yearArray.map(value => value).reduce((prev, next) => prev + next);
//     return sum;
//   } else {
//     return '0';
//   }
// }

// export function groupDividendMonth(portfolio) {
//   if (Object.keys(portfolio).length !== 0) {
//     const groups = portfolio.map(stock => {
//       return stock.dividends.reduce((i, date) => {
//         const month = date.exDate.split('-')[1];
//         i[month]
//           ? i[month].data.push(date)
//           : (i[month] = {
//               amountPerShare: date.amountPerShare,
//               quantity: stock.quantity,
//               name: stock.name,
//               month: month,
//             });
//         return i;
//       }, {});
//     });
//     const result = Object.keys(groups).map(keys => {
//       return groups[keys];
//     });
//     return result;
//   } else {
//     return null;
//   }
// }

// export function calcDividendMonth(dividends, month) {
//   const m = dividends.filter(outer => outer[month]).map(outer => outer[month]);

//   if (m.length > 0) {
//     return m
//       .map(dividend => dividend.amountPerShare * dividend.quantity)
//       .reduce((prev, next) => prev + next);
//   } else {
//     return 0;
//   }
// }

// -------------------------------
// set currency multipliers for always show in SEK
// -------------------------------
export function toSek(currency) {
  let currency_multiply = 1;
  if (currency === 'EUR') {
    currency_multiply = 10.34;
  } else if (currency === 'NOK') {
    currency_multiply = 1.06;
  } else if (currency === 'DKK') {
    currency_multiply = 1.38;
  } else if (currency === 'USD') {
    currency_multiply = 9.09;
  } else if (currency === 'CAD') {
    currency_multiply = 6.83;
  }
  return currency_multiply;
}

// -------------------------------
// Dividends each month
// -------------------------------
export function getDividendMonth(portfolio, month) {
  if (Object.keys(portfolio).length !== 0) {
    // get an array of stocks that has divdends on give month
    const array = portfolio
      .filter(element => element.dividends.some(subElement => subElement.exDate.includes(month)))
      .map(element => {
        let n = Object.assign({}, element, {
          dividends: element.dividends.filter(subElement => subElement.exDate.includes(month)),
        });
        return n;
      });

    // get an array of stocks dividends
    if (Object.keys(array).length !== 0) {
      const dividendArray = array.map(({ quantity, dividends, currency_multiply }) => {
        return dividends
          .map(item => item.amountPerShare * quantity * currency_multiply)
          .reduce((prev, next) => prev + next);
      });

      // get the sum of all dividends
      const dividendSum = dividendArray.reduce((prev, next) => prev + next);

      return dividendSum;
    } else {
      return 0;
    }
  } else {
    return 0;
  }
}

export function getMonthList(portfolio, month) {
  if (Object.keys(portfolio).length !== 0) {
    const stocks = portfolio
      .filter(element => element.dividends.some(subElement => subElement.exDate.includes(month)))
      .map(element => {
        let n = Object.assign({}, element, {
          dividends: element.dividends.filter(subElement => subElement.exDate.includes(month)),
        });
        return n;
      });

    if (Object.keys(stocks).length !== 0) {
      const dividendArray = stocks.map(({ quantity, dividends, currency_multiply }) => {
        return dividends
          .map(item => item.amountPerShare * quantity * currency_multiply)
          .reduce((prev, next) => prev + next);
      });
      const $data = {
        stocks,
        dividendArray,
      };
      return $data;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

export const colors = [
  '#154360',
  '#1b4f72',

  '#1a5276',
  '#21618c',

  '#1f618d',
  '#2874a6',

  '#2471a3',
  '#2e86c1',

  '#2980b9',
  '#3498db',

  '#5dade2',
  '#5499c7',

  '#7fb3d5',
  '#85c1e9',

  '#a9cce3',
  '#aed6f1',

  '#d4e6f1',
  '#d6eaf8',

  '#eaf2f8',
  '#ebf5fb',
];
