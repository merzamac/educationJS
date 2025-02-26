//short-circuit

// falso
//false
// 0
// ''
// null 
// undefined
// NaN
let nombre = '';
let username = nombre || 'Merzamac';

console.log(username)
function fn1(){
    console.log('funcion 1');
    return false
}
function fn2(){
    console.log('funcion 2');
    return true
}
let x = fn1() || fn2();
