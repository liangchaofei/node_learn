/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:25:45
 * @LastEditTime: 2019-10-10 09:25:45
 * @LastEditors: your name
 */
var fs = require('fs')
fs.readFile('file.txt',(err,data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
console.log('end')