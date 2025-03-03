const user = {id:1};
user.name ='merza';
user.age = 28;
user.guardar = function (){
    console.log('guardadando... ',user.name)
}


user.guardar();
delete user.name;
delete user.guardar;
console.log(user)

//Object.freeze(user)||inmutable
Object.seal(user)//permite cambiar valores de las propiedades
user.name ='merza';
user.age = 27;
console.log(user)