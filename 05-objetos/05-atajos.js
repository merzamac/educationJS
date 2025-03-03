let obj = {};
let obj1 = new Object();
//valueOf()
/*
new Array; []
new String(); ""
new Number();
new Boolean();
*/

function Usuario(){
    this.name = "merza";

}
let user = new Usuario();
console.log(user.constructor);