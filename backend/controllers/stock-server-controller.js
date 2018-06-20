import mongoose from 'mongoose';

//import models
import Stock from '../models/stock-server-model';

export const addStock = (req, res) => {
  console.log(req.body);
  const newStock = new Stock(req.body);
  newStock.save((err, stock) => {
    if (err) {
      return res.json({
        'success': false,
        'message': 'Some Error'
      });
    }
    return res.json({
      'success': true,
      'message': 'Stock added successfully',
      stock
    });
  })
}

export const getStocks = (req, res) => {
  Stock.find().exec((err, stocks) => {
    if (err) {
      return res.json({
        'success': false,
        'message': 'Some Error'
      });
    }
    return res.json({
      'success': true,
      'message': 'Stocks fetched successfully',
      stocks
    });
  });
}

// export const updateTodo = (req, res) => {
//   Todo.findOneAndUpdate({
//     _id: req.body.id
//   }, req.body, {
//     new: true
//   }, (err, todo) => {
//     if (err) {
//       return res.json({
//         'success': false,
//         'message': 'Some Error',
//         'error': err
//       });
//     }
//     console.log(todo);
//     return res.json({
//       'success': true,
//       'message': 'Updated successfully',
//       todo
//     });
//   })
// }

// export const getTodo = (req, res) => {
//   Todo.find({
//     _id: req.params.id
//   }).exec((err, todo) => {
//     if (err) {
//       return res.json({
//         'success': false,
//         'message': 'Some Error'
//       });
//     }
//     if (todo.length) {
//       return res.json({
//         'success': true,
//         'message': 'Todo fetched by id successfully',
//         todo
//       });
//     } else {
//       return res.json({
//         'success': false,
//         'message': 'Todo with the given id not found'
//       });
//     }
//   })
// }

// export const deleteTodo = (req, res) => {
//   Todo.findByIdAndRemove(req.params.id, (err, todo) => {
//     if (err) {
//       return res.json({
//         'success': false,
//         'message': 'Some Error'
//       });
//     }
//     return res.json({
//       'success': true,
//       'message': todo.todoText + ' deleted successfully'
//     });
//   })
// }