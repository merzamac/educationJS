let nombre = "Tanjiro";
let anime = "Demon slayer"
let edad = 16

let personaje = {
    nombre:"Tanjiro",
    anime:"Demon Slayer",
    edad: 16,
} //objeto

console.log(personaje)
console.log(personaje.anime)
console.log(personaje['anime'])

personaje.edad = 14
let key = "edad"
personaje[key] = 17

delete personaje.anime
console.log(personaje)