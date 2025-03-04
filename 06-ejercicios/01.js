//construye usuarios con funcion constructor
function Usuario(name){
    this.id = Math.random();
    this.name = name;

}

let user = new Usuario('Merza');
let user2 = new Usuario('Merzamac');
console.log(user,user2)