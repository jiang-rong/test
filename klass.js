// var student=require("./service.js");
// var teacher=require("./teacher.js");
// function addit(teachername,students) {
// 	teacher.add(teachername);
// 	students.forEach(function(item,index) {
// 		student.add(item)
// 	})
// }
// exports.addit=addit;
// 
// var https=require("https");
// var fs=require("fs");
// var options={
// 	key:fs.readFileSync("ssh_key.pem"),
// 	cert:fs.readFileSync("ssh_cert.pem")
// }
// https.createServer(options,function(req,res) {
// 	res.writeHead(200);
// 	res.end("hello world")
// }).listen(8090);
// var fs=require("fs")
fs.readFile("doc/mm4.jpg",function(err,origin_buffer) {
	fs.writeFile("doc/mm2.jpg",origin_buffer,function(err) {
		if(err)console.log(err);
	})
	var base64Image=origin_buffer.toString("base64")
	var decodedImage=new Buffer(base64Image,"base64");
	console.log("\n"+base64Image);
	fs.writeFile("doc/mm26.jpg",decodedImage,function(err) {
		if(err)console.log(err);
	})
})

var fs=require("fs");
var http=require("http");
var request=require("request")
http.createServer(function(req,res) {
	// fs.readFile("doc/mtj.mp4",function(err,data) {
	// 	if(err){
	// 		res.end("file not exist")
	// 	}
	// 	else{
	// 		res.writeHead(200,{"Content-Type":"text/html"})
	// 		res.end(data)
	// 	}
	// })
	request("http://static.mukewang.com/img/533e4cbd00011ecc01000100-100-100.jpg").pipe(res)
}).listen(8090)
var readStream=fs.createReadStream("doc/mtj.mp4");
var writeStream=fs.createWriteStream("doc/stream-1.mp4");

readStream.on("data",function(chunk) {
	// writeStream.write(chunk);
	if(writeStream.write(chunk)===false){
		readStream.pause()
	}
})
readStream.on("end",function() {
	writeStream.end()
})

writeStream.on("drain",function() {
	console.log("data drains");
	readStream.resume()
});
// var n=0;
// readStream.on("data",function(chunk) {
// 	n++
// 	console.log("data emits");
// 	console.log(Buffer.isBuffer(chunk));
// 	readStream.pause()
// 	console.log("data pause");
// 	setTimeout(function() {
// 		console.log("data pause end");
// 		readStream.resume()
// 	})
// 	// console.log(chunk.toString("utf8"));
// }).on("end",function() {
// 	console.log(n);
// 	console.log("data ends");
// }).on("close",function() {
// 	console.log("data close");
// }).on("error",function(e) {
// 	console.log("error "+e);
// });


