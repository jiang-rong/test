// function addit(teacher) {
// 	console.log("add teacher:"+teacher);
// }
// exports.add=addit;
var http=require("http");
var querystring=require("querystring");
var postData=querystring.stringify({"content":"一起期待下一期",cid:348})；
var options={
	hostname:"www.imooc.com",
	port:80,
	path:"/course/document",
	method:"POST",
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Cache-Control':'no-cache',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=f082da2d-ea58-44a3-8e02-bde08573175e; imooc_isnew_ct=1495024800; loginstate=1; apsid=ZmNDVjNmRiMGU4NTM2NjQxODgxNmQwZjExM2Q3MDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDAzNzIxOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADk1YWJhNzRlOWEwZmUxNzc5MDBkN2QwMGI4OTk4MTcxOJiCWTiYglk%3DND; PHPSESSID=imtu605m6coligfbkk1i7qaou7; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1503277747,1503741840,1503807078,1503821311; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1503999745; imooc_isnew=2; cvde=59a27de7d5b80-239',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Pragma':'no-cache',
		'Referer':'http://www.imooc.com/video/8837',
		'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
}

var req=http.request(options,function(res) {
	console.log('status'+res.statusCode);
	console.log("headers:"+JSON.stringify(res.headers));
	res.on("data",function(data) {
		console.log(Buffer.isBuffer(data));
		console.log(typeof data);
	})
	res.on("end",function() {
		console.log("评论完毕");
	})
}).on("error",function(e) {
	console.log("error"+e.message);
})
req.write(postData);
req.end();

