var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
router.get('/download',function(req,res,next) {
  var file = path.resolve(__dirname+'/../public/images/resume.pdf');
  var stat = fs.statSync(file);
  res.setHeader('Content-disposition', 'attachment; filename=Resume.pdf');
  res.setHeader('Content-Length', stat.size);            
  res.download(file,'Resume.pdf',function(err) { })
})
router.get('*', function(req, res, next) {
  res.render('index', { title: 'Mean Resume' });
});
module.exports = router;
