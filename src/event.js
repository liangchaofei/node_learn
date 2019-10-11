/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:32:42
 * @LastEditTime: 2019-10-10 09:34:32
 * @LastEditors: Please set LastEditors
 */
var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter()

event.on("some_event",() => {
    console.log('123')
})
setTimeout(function(){
    event.emit('some_event')
},1000)