const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'premium' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

function cuantosPrimium (usrs) {
    return usrs.filter (usr => usr.plan ==='premium').length + usrs.filter (usr => usr.plan ==='gold').length
}
function cuantosMayores (usrs) {
    return usrs.filter (usr => usr.edad >= 18).length
}
console. log (cuantosMayores (usuarios))
console. log (cuantosPrimium (usuarios))