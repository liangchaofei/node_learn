/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-12 09:46:05
 * @LastEditTime: 2019-10-12 09:59:34
 * @LastEditors: Please set LastEditors
 */
var http = require('http')
var fs = require('fs')
var path = require('path')
var mime = require('mime')
var cache = {};

function send404(response){
    response.writeHead(404,{'Content-type': 'text/plain'})
    response.write('error 404')
    response.end()
}

function sendFile(response,filePath,fileContents){
    response.writeHead(200)
    response.end(fileContents)
}

function serverStatic(response, cache, absPath){
    if(cache[absPath]){
        sendFile(response, absPath, cache[absPath])
    }else{
        fs.exists(absPath, function(exists){
            if(exists){
                fs.readFile(absPath,function(err, data){
                    if(err){
                        send404(response)
                    }else{
                        cache[absPath] = data;
                        sendFile(response,absPath, data)
                    }
                })
            }else{
                send404(response)
            }
        })
    }
}

var server = http.createServer(function(req,res){
    var filePath = false;
    if(req.url == '/'){
        filePath = 'public/index.html'
    }else{
        filePath = "public" + require.url;
    }
    var absPath = './' + filePath;
    serverStatic(res,cache,absPath)
})

server.listen(3000)