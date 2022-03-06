const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)
// const ObjectId = Schema.ObjectId;

const Course = new Schema({
//   id: ObjectId,
  name: String,
  description: String,
  image: String,
  videoId: String,
  level: String,
  slug : {type: String, slug: 'name' , unique: true}
},{
  timestamps: true,
});
module.exports =  mongoose.model('Course', Course);