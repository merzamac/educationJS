function Usuario(){
    this.id = 1;
    this.recuperarClave = function () {
        console.log('Recuperando clave');
    };
}

let ususario = new Usuario();

console.log(ususario);