var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var bodyParser = require('body-parser');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })


var express = require('express');
var app = express();
// 生成一个静态文件，服务器文件夹
//app.use(express.static('www'));
var sql = require('./sql.js');

app.all('*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header("Access-Control-Allow-Headers", "X-Requested-With");
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});


// 接受ajax请求返回响应头响应体（相关信息）
app.get('/getIndexGood', function(req,res){
	
//	console.log(req.query);
//	sql.query("select * from indexgood where ? and ?"
//	,[{
//		'siteType': req.body.siteType,
//	},{
//	'dfda': req.body.siteType,
//}
	
	sql.query("select * from indexgood where ?"
	,[{
		'siteType': req.query.siteType,
	}],function(data){
		res.send(data);
		console.log(data);
	})
});

app.get('/getAdress',function(req,res){
//	res.header("Access-Control-Allow-Origin", "*");
	request('../api/region.json', function(error, response, body){
//			res.send(body);
			console.log(body)
		})
//	console.log(adr);
});



app.listen(3002);
//app.listen(3001);