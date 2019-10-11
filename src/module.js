/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:38:26
 * @LastEditTime: 2019-10-10 09:38:26
 * @LastEditors: your name
 */
var name;
exports.setName = function(thyName){
    name = thyName;
}
exports.sayHello = function(){
    console.log('hello '+ name)
}