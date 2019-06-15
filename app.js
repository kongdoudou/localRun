var express = require('express');
var velocity = require('velocityjs')	//velocityjs

// core package
var http = require('http')
var path = require('path')
var fs = require('fs')

var url = require('url')

var cwd = process.cwd()					//获取当前文件路径
console.log("cwd="+cwd)

var cookieParser = require('cookie-parser');
var logger = require('morgan');
var request = require('request');

// router config
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'vm');

//全用vm模板引擎
app.engine('vm',function(path,options,fn){
    var template = fs.readFileSync(path).toString();
    var macros = {
        parse: function(file) {
            var template = fs.readFileSync(cwd + '/views/' + file).toString()
            return this.eval(template);
        }
    }
    try{
        fn(null, velocity.render(template, options, macros))
    }catch(err){
        console.log(err);
        fn(err)
    }
});//end engine

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);


app.get('/cardLayout', function(req, res) {
    fs.readFile('views/full/cardLayout.json', 'utf-8', (err, data) => {
        if(!err) {
            res.send(JSON.parse(data))
        }
    })
})

app.get('/dataSource/:id', function(req, res) {
    var id = req.params.id
    console.log(req)
    // var params = url.parse(req.url, true).query; // 获取url中查询字符串中数值的方式
    console.log(id)
    console.log('-------')
    // var params = url.parse(req.url, true).query;
    // console.log(params)
    let url = 'http://lequ-bk.iqiyi.com/rn/card/getCard?lequ=lequ-ajax&cardId=' + id  + '&_t=1560254533191'
    request({
        uri: url,
        method: 'GET',
        json: true
    }, function(_err, _res, _resBody) {
        res.send(_resBody)
    })
})


module.exports = app;
