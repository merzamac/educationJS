const usuarios = [
    { edad: 17, nombre: 'Nico', plan: 'premium' },
    { edad: 13, nombre: 'Chanchito', plan: 'free' },
    { edad: 32, nombre: 'Fernanda', plan: 'free' },
    { edad: 25, nombre: 'Felipe', plan: 'gold' },
];

const pagos = usuarios.filter(usuario => usuario.plan !== 'free');
pagos.sort((a, b) => {
    if(a.edad < b.edad) {
        return 1;
    }
    if(a.edad > b.edad) {
        return -1;
    }
    return 0;
});
const lista = pagos.map(u => `<li>${u.nombre}</li>`);

const html = `
<ul>
${lista.join('\n')}
</ul>`;

console.log(html);
