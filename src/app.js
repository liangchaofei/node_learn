/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-09 13:09:23
 * @LastEditTime: 2019-10-09 13:09:23
 * @LastEditors: your name
 */
var http = require('http')
http.createServer((req,res) => {
    res.write('<h1>111</h1>')
    res.end()
}).listen(3000)
console.log('http server is on 3000')