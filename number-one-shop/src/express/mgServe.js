var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var express = require('express');
var app = express();

//npm install body-parser
var bodyParser = require("body-parser");
//post请求需要body-parser模块处理
app.use(bodyParser.urlencoded({
	extended: false
}));

// 生成一个静态文件，服务器文件夹
//app.use(express.static('www'));
var mg = require('./mgdb.js');

//app.get('/getAdress',function(req,res){
//	res.header("Access-Control-Allow-Origin", "*");
//	mg.myQuery('indexGoods',{},function(data){
//		res.send(data);
//	})
//	
//});

app.post('/getLogin_user', function (req, res) {

	res.header("Access-Control-Allow-Origin", "*");
	console.log(req.body);
	mg.myQuery('login_user', {
		'username': req.body.username,
		'pw': req.body.pw
	}, function (data) {
		//		res.send(data);
		if (data.length > 0) {
			res.send('yes');
		} else {
			res.send('no');
		}
	})
});

app.post('/addshoppingcar', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	console.log(req.body.newlist);
	mg.myQuery('shoppingcar', {
		"oname": req.body.oname
	}, function (data) {
		if (data.length > 0) {
			mg.myUpdate('shoppingcar', {
				"oname": req.body.oname,
			}, {}, function (data) {
				res.send('exit');
			})
		}
		else {
			mg.myInsert('shoppingcar',
				{
					'oname': req.body.oname,
					'this_all': req.body.this_all,
					'allPrice': req.body.allPrice,
					'newlist': req.body.newlist
				}, function (data) {
					res.send('add');
				})
		}
	})
});


app.post('/shoppingcar', function (req, res) {

	mg.myQuery('shoppingcar', {}, function (data) {
		res.header('Access-Control-Allow-Origin', '*');
		res.send(data)
		//		if(data.length>0){
		//			mg.myUpdate('login_user',{
		//				"name": req.body.name,
		//				"num": req.body.num + data[0].num
		//			})
		//			res.send('yes');
		//		}else{
		//			res.send('no');
		//		}
	})
});

app.post('/goodsList', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	mg.myQuery('classify', {}, function (data) {
		res.send(data)
	})
});

app.post('/img', function (req, res) {
	res.header('Access-Control-Allow-Origin', '*');
	mg.myQuery('img', {}, function (data) {
		res.send(data)
	})
});

app.post('/register_user', function (req, res) {

	res.header("Access-Control-Allow-Origin", "*");
	console.log(req.body);
	mg.myQuery('login_user', {
		'username': req.body.username,
	}, function (data) {
		if (data.length > 0) {
			res.send('no');
		} else {
			mg.myInsert('login_user', {
				'username': req.body.username,
				'pw': req.body.pw
			}, function (data) {
				res.send('yes');
			})
		}
	})
});

app.listen(3003);
//app.listen(3001);