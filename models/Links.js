var mongoose = require('mongoose');
var ai = require('mongoose-auto-increment');
var Schema = new mongoose.Schema({
  title: String,
  icon: String,
  url: String,
});
Schema.plugin(ai.plugin,{ model: 'Link', field: 'id', startAt:1 })
mongoose.model('Link', Schema);