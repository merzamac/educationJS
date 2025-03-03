function crearUsuario(name,email){
    return {
        email,
        name,
        activo: true,
        recuperarClave: function () {
        console. log ( 'Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('merzamac','merzamac@merzamac.com');
console.log(user1)