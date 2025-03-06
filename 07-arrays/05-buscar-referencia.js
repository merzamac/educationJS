const usuarios = [
    {id:1, name:'merzamac'},
    {id:2, name:'merza'},

];

const resultado = usuarios.find(function(usuario){
    return usuario.id === 1;
});

console.log(resultado);