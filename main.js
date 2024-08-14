/** CLASE 1 REACT **/

//¿Que es React? 
//Es una librería de JS. 

//¿Cuando Nace? 
//Mayo del 2013 en las oficinas de Facebook. 

//¿Cuales son sus ventajas? 

//1) Crear aplicaciones web muchos más rápidas. Gracias a la técnica del Virtual DOM que me permite actualizar algunas partes de mi aplicación sin recargar toda la página. 

//2) Basado en componentes: son conjuntos de elementos que cumplen una función específica (ejemplo un botón).

//3) Tiene un enfoque DECLARATIVO. 

//Enfoque declarativo: estilo de programación en donde nos enfocamos en lo que quiero lograr y no tanto en el como. 

//Enfoque imperativo: un estilo de programación en donde se detallan paso a paso las acciones a realizar para lograr un resultado especifico. 


/* Ejemplo en código */

//EJEMPLO A: Queremos crear un array de números pares entre el 0 y el 10. 

//¿Cómo lo podriamos resolver con el enfoque imperativo? 

const array = []; 

for(let i = 0; i <= 10; i++) {
    if( i % 2 == 0) {
        array.push(i);
    }
}

console.log(array);

//De modo declarativo: 

const numeros = [0,1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter(numero => numero % 2 == 0);
console.log(pares);


//EXPRESIONES EN JS: 

//Es una combinación de valores, variables y operadores que pueden ser evaluados para producir un resultado. 

//Ejemplos: 

let numero = 5;

let suma  = numero + 5;

//Funciones en JS: 

//Es un bloque de instrucciones con una tarea especifica que puede ser reutilizado muchas veces. 

//Pueden ser DECLARADAS o EXPRESADAS. 

//Ejemplo de una función declarada: 
console.log(sumamos(50, 10));

function sumamos(numeroUno, numeroDos){
    //Cuerpo de la función.
    return numeroUno + numeroDos; 
}

//¿Una función declarada se puede invocar antes de su declaración? 
//Si, porque el motor de JS las lee antes de ejecutar el código, y esto se conoce como hoisting. 

//Funciones Expresadas: son aquellas que se asignan a una variable. 

//Función anónima: 

const sumaDos = function(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumaDos(80,10));

//Función flecha: 
//Es una versión resumida de la función anónima. 

const sumaTres = (numeroUno, numeroDos) => numeroUno + numeroDos;

console.log(sumaTres(90,10));

//Y si no tenemos parámetros? Podemos colocar los parentesis vacios. 

const sumaCuatro = () => 10 + 10; 

console.log(sumaCuatro());

//Trabajamos por módulos: 
//Es una forma de dividir nuestro trabajo o código en partes más pequeñas. 

//Lo logramos utilizando las palabras "export" e "import". 




