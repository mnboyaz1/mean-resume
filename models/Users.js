var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
var mongoose = require('mongoose');
var ai = require('mongoose-auto-increment');
var Schema = new mongoose.Schema({
  first: String,
  last: String,
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'Email address is required',
    validate: [validateEmail, 'Please fill a valid email address'],
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  title:String,
  phone:String,
  summary:String
  //comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
});
Schema.plugin(ai.plugin,{ model: 'User', field: 'id', startAt:1 })
mongoose.model('User', Schema);