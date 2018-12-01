var http = require('http');
var url = require('url');
var server = http.createServer();

// server.on('request', function(req, res, next){
//     res.writeHead(200,{
//         "Content-Type": "text/html;charset=utf-8"
//     });
//     res.end('started');
// });

server.on('request', function(req, res, next){
    var urlPath = url.parse(req.url).pathname;
    if(urlPath == '/jsonp'){
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8"
        });
        var data = {
            username: 'sunsboy',
            address: '安徽省合肥市经济技术开发区'
        }
        data = JSON.stringify(data);
        var callback = 'showData'+'('+data+')';
        res.end(callback);
    }else{
        res.writeHead(300,{
            "Content-Type":"text/html;charset=utf-8"
        });
        res.end('接口不存在！');
    }
});

server.listen('9001', function(){
    console.log('server start at port 9001');
});
