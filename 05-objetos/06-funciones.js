function Usuario(nombre){
    this.name = nombre;

}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let user = new U('merza');

console.log(user);

function of(Fn,arg){
    return new Fn(arg)
}
let user2 = of(Usuario,'merza');
console.log(user2);

function returned() {
    return function() {
    console. log ( 'Hola Mundo');
    }
}
let saludo = returned();
saludo();