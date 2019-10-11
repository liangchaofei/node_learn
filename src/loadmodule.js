/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:39:23
 * @LastEditTime: 2019-10-10 09:41:40
 * @LastEditors: Please set LastEditors
 */
var myModule = require('./module')
myModule.setName('aaa')

var myModule2 = require('./module')
myModule2.setName('222')

myModule.sayHello() //222