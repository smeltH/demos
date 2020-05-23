const http = require("http"); // Node.js提供了http模块，用于搭建HTTP服务端和客户端
const fs = require("fs");
const url = [];

for (let i = 1; i <= 25; i++) {
	const baseUrl = `http://www.scuec.edu.cn/s/48/t/1997/p/6/i/${i}/list.htm`;
	http.get(baseUrl, function(res) {
		//发送get请求
		var html = "";
		res.on("data", function(data) {
			html += data; //字符串的拼接
		});
		res.on("end", function() {
			fs.writeFile("./hello.txt", html, err => {
				if (err) {
					console.log(err);
				} else {
					console.log("数据写入成功");
				}
			}); // 异步方法
			if (html.indexOf("千人") > -1) {
				console.log(url);
			}
		});
	}).on("error", function() {
		console.log("获取资源出错！");
	});
}
