import mongoose from 'mongoose';

var Schema = mongoose.Schema({
  addeddAt: {
    type: Date,
    default: Date.now
  },
  stockShort: String
});

export default mongoose.model('Stock', Schema);