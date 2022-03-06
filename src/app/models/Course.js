const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
//   id: ObjectId,
  name: String,
  description: String,
  image: String,
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});
module.exports =  mongoose.model('Course', Course);