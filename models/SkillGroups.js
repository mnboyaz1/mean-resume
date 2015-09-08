var mongoose = require('mongoose');
var ai = require('mongoose-auto-increment');
var Schema = new mongoose.Schema({
  _id: Number,
  title: String,
  skills: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Skill'}]
});
Schema.plugin(ai.plugin,{ model: 'SkillGroup', field: 'id', startAt:1 })
mongoose.model('SkillGroup', Schema);