var mongoose = require('mongoose');
var ai = require('mongoose-auto-increment');
var Schema = new mongoose.Schema({
  skillgroups_id:Number,
  title: String,
});
Schema.plugin(ai.plugin,{ model: 'Skill', field: 'id', startAt:1 })
mongoose.model('Skill', Schema);