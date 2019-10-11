/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-10-10 09:42:01
 * @LastEditTime: 2019-10-10 09:43:12
 * @LastEditors: Please set LastEditors
 */
function Hello(){
    var name;
    this.setName = function(aname){
        name = aname
    }
    this.setHello = function(){
        console.log('hello '+ name)
    }
}
module.exports = Hello;