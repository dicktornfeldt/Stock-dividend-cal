# Stock tracker

Get data from `https://www.avanza.se/_mobile/market/stock/{id}`

```
portfolio: {
  user_id: Int
    stocks: {
      stock_1: {
        name: String
        amount: Int
        average_cost: Int
      },
      stock_2: {
        name: String
        amount: Int
        average_cost: Int
      }
    }
}

user: {
    user_id: Int
    user_email: String
    user_password: xxxx
}
```
