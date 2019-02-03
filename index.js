// var klass=require("./klass.js");
// klass.addit("scott",["白富","高富帅"]);
// var http=require("http");
// http.createServer(function(req,res) {
// 	res.writeHead(200,{'Content-Type','text/plain'})
// 	res.write("hello world");
// 	res.end()
// }).listen(2015)
var http=require("http");
var cheerio=require("cheerio");
var baseUrl="http://www.imooc.com/learn/";
// var url="http://www.imooc.com/learn/348";
var videoIds=[348,259,197,134,75];

function filterChapters(html) {
	var $=cheerio.load(html);
	var chapters=$(".chapter");
	var title=$(".course-infos .path span").text()
	// var number=parseInt($(".statics .js-learn-num").text(),10);
	var title=$(".coursesData")
	chapters.each(function (item) {
		var chapter=$(this);
		var chapterTitle=chapter.find("strong").text().replace(/\s+/g,"");
		var videos=chapter.find(".video").children("li");
		var chapterData={
			chapterTitle:chapterTitle,
			videos:[]
		};
		videos.each(function(item) {
			var video=$(this).find(".J-media-item");
			var videoTitle=video.text().replace(/\s+/g,"");
			var id=video.attr("href").split("video/")[1];
			chapterData.videos.push({title:videoTitle,id:id})
		})
		courseData.videos.push(chapterData)
	});
	return courseData;
}

function printCourseInfo(coursesData) {
	coursesData.forEach(function (item) {
		console.log(" 人学过 "+item.title+"\n");
	})
	coursesData.forEach(function(courseData){
		console.log('\n'+'###'+courseData.title+"\n");
		courseData.videos.forEach(function (item) {
			var chapterTitle=item.chapterTitle;
			console.log(chapterTitle+"\n");
			item.videos.forEach(function (video) {
				console.log(" 【"+video.id+"】 "+video.title+"\n")
			})
		})
	})
}


function getPageAsync(url) {
	return new Promise(function(resolve,reject) {
		console.log("正在爬去"+url);
		http.get(url,function(res) {
			var html="";
			res.on("data",function(data) {
				html+=data;
			})
			res.on("end",function() {
				resolve(html)
			})
		}).on("error",function(e) {
			reject(e);
			console.log("出错了");
		})
	})
}



var fetchCourseArray=[];
videoIds.forEach(function(id){
	fetchCourseArray.push(getPageAsync(baseUrl+id))
})

Promise.all(fetchCourseArray).then(function(pages) {
	var coursesData=[];
	pages.forEach(function(html) {
		var courses=filterChapters(html);
		coursesData.push(courses)
	});
	// coursesData.sort(function(a,b) {
	// 	return a.number<b.number
	// })
	printCourseInfo(coursesData)
})




