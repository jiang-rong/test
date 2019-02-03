// var http=require("http");
// http.createServer(function(req,res) {
// 	res.writeHead(200,{"Content-Type":"text/plain"});
// 	res.end("Hello World\n")
// }).listen(1337,"127.0.0.1");
// function addit(student) {
// 	console.log("add student:"+student);
// }
// exports.add=addit;
var EventEmitter=require("events").EventEmitter;
var life=new EventEmitter();
life.setMaxListeners(11);
function water (who) {
	console.log("给"+who+"倒水");
}
life.on("弃用",water);
life.on("弃用",function(who) {
	console.log("给"+who+"哈哈");
})
life.on("hao",function(who) {
	console.log("给"+who+"洗衣服");
})
life.on("hao",function(who) {
	console.log("给"+who+"哈哈");
})
// life.removeAllListeners("弃用");
life.removeListener("弃用",water);
life.emit("弃用","汉字");
// var b=life.emit("hao","哦哦");
console.log(EventEmitter.listenersCount("弃用"));