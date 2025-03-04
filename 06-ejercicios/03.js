function similares(obj1,obj2){
    //return obj1.name === obj2.name;
    let bandera = false;
    for(let llave in obj1){
        if(obj1[llave]!==obj2[llave]){
            bandera = true;
        }
    }
    return !bandera;
}

let resultado = similares(
    {id:1,name:'merza'},
    {id:2,name:'merzamac'},
);

console.log(resultado);