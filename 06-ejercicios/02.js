//factory functions
function createUsuario(name){
    return {
        id:Math.random(),
        name,
};

}

let user = createUsuario('Merza');
let user2 = createUsuario('Merzamac');
console.log(user,user2)