const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

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

// Add plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all',
});
module.exports =  mongoose.model('Course', Course);