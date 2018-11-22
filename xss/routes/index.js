var express = require('express');
var router = express.Router();

var express=require("express")
var router=express.Router()
var router=express.Router()
var router=express.Router()

var comments={}
// function html_encode(str) {
// 	var s=''
// 	if(str.length==0){return ''}
// 	s=str.replace(/&/g,"&gt;");
// 	s=s.replace(/</g,"&lt;");
// 	return s;
// }
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  next();
});
router.get('/comment',function(req,res,next) {
	// res.header("Content-Type", "application/json;charset=utf-8");
	comments.v=req.query.comment;
	console.log(req.query.comment);

})

router.get("/getComment",function(req,res,next) {
	res.json({
		comment:comments.v
	})
})



module.exports = router;

