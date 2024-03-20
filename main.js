// Variables

//alert('JavaScript funcionando correctamente')

let variableSinValor;

let booleano1 = true;

let booleano2 = false;

const PI = Math.PI;

const TAU = PI * 2;

const miNombre = 'Agustin';

const miNumeroFav = 17;

const haceFrio = true;

console.log(miNombre.length);

console.log(typeof (miNumeroFav));

console.log(`Mi nombre es ${miNombre} y mi numero favorito es ${miNumeroFav}`);

const js = 'Sere un crack en JavaScript al terminar el bootcamp';
console.log(js.toUpperCase());

const variable = 'Hola soy un crack';
console.log(variable.substring(0, 6));

let convertir = miNumeroFav.toString();
console.log(typeof (convertir));


const direccion = 'Polo y Peyrolon 57';
const template = `Mi direccion es ${direccion}`;
console.log(template);

const convert2 = PI.toString();
console.log(convert2.substring(0, 4));

//Array
const arrayVacio = [];

const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const arrayNumeros2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const arrayNumerosPares = [0, 2, 3, 4, 8];

const arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

const holaMundo = ['Hola', 'Mundo'];

const loGuardotodo = ['hola', 'que', 23, 42.33, 'tal'];

const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

console.log(loGuardotodo.length);

const colorOjos = 'azul';
loGuardotodo.push(colorOjos);
console.log(loGuardotodo);

console.log(loGuardotodo[1]);

const nombre1 = 'Euralio';
loGuardotodo.push(nombre1);
console.log(loGuardotodo);

// Objetos

const coche = {
    marca: 'Citroen',
    modelo: 2023,
    matricula: 'lte 7771'
};

console.log(coche);

const casa = {
    codPostal: 46021,
    calle: 'Polo y Peyrolon 57',
    portal: 57,
    piso: 5
};

console.log(casa);

/*const FullStackDeveloper = {
    lenguajes: {
        frontEnd: ['Html', 'CSS', 'JavaScript'], backEnd: ['Python', 'Ruby'],
        baseDeDatos: ['SQL', 'NoSQL']
    },

    proyectos: {
        htmlYcss: ['https://github.com/AgustinErimbaue/proyecto-web', 'https://github.com/AgustinErimbaue/cartahtml'],
        javaScript: ['https://github.com/AgustinErimbaue/Ejemplo1', 'https://github.com/AgustinErimbaue/Ejemplo2']
    }
};*/

const FullStackDeveloper = {
    lenguajes:['Html', 'CSS', 'JavaScript','Python', 'Ruby'],
    proyectos:['https://github.com/AgustinErimbaue/proyecto-web','https://github.com/AgustinErimbaue/cartahtml']
}

console.log(FullStackDeveloper);

const perro = {
    nombre: 'Bruno',
    raza: 'Pastor Catalan',
    color: 'marron',
    edad: 8
};

console.log(perro);

const noticia = {
    titulo: 'Nueva Tecnología de Energía Solar Promete Futuro Sostenible',
    cuerpo: 'Investigadores de la Universidad de Valencia han desarrollado una nueva tecnología de energía solar que es más eficiente y asequible. Este avance podría acelerar la transición hacia un futuro energético sostenible.'
};

console.log(noticia);

const persona = {
    nombre: 'Agustin',
    apellidos: 'Erimbaue Lamontanaro',
    edad: 30
};
console.log(persona.nombre);

//console.log(FullStackDeveloper.lenguajes.frontEnd[2])
console.log(FullStackDeveloper.lenguajes[2]);

const portatil = {
    marca: 'Dell'
};
console.log(portatil.marca);
console.log(portatil['marca']);

const concierto = {
    grupos: ['Radiohead', 'Coldplay', 'Pink Floyd', 'The Neighbourhood', 'Maroon 5']
};

console.log(concierto.grupos);

const led = {
    lampara1: 'rojo',
    lampara2: 'verde',
    lampara3: 'azul'
};

const arrayRGB = [];

arrayRGB.push(led.lampara1, led.lampara2, led.lampara3)
console.log(arrayRGB);

const O_Error = {
    codigo: '409 Conflict'
};

console.error(O_Error.codigo)

const grupo = {
    integrantes: ['Mario', 'Ricardo', 'Marcos', 'Agustin']
};

const integrantes = grupo.integrantes;

console.log(integrantes[3]);

const impresora = {
    tinta: {  rojo:'rojo', verde:'verde', azul:'azul' }
};

const nivelesDetinta = impresora.tinta;

console.log(nivelesDetinta);

const movil = {
    especificaciones: { Color: 'Interstellar Black', memoriaInterna: '256gb' }
};

const especificaciones = movil['especificaciones'];
console.log(especificaciones);

portatil.marca = "MSI";
console.log(portatil);

console.log(grupo.integrantes.length);

const grupoNuevo = grupo.integrantes;
grupoNuevo.pop();
console.log(grupoNuevo.length);