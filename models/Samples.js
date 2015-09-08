var mongoose = require('mongoose');
var ai = require('mongoose-auto-increment');
var Schema = new mongoose.Schema({
  title: String,
  description: String,
  code: String,
});
Schema.plugin(ai.plugin,{ model: 'Sample', field: 'id', startAt:1 })
mongoose.model('Sample', Schema);