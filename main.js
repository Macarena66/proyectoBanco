/*
Escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades..
*/
// const gestores = generarGestores();
// console.log(gestores);

// const gestoresJSON = JSON.stringify(gestores);
// console.log(gestoresJSON);
// console.log(gestoresJSON.length);

// const clientes = generarClientes();
// const cliente1 = clientes[0];
// const cliente1JSON = JSON.stringify(cliente1);
// console.log(cliente1JSON);

//realizar una peticion a http://localhost:8085/ok y mostrar la respuesta por pantalla


// las propiedades del objeto opciones son: url, metodo, body, cabeceras


//esto es una forma de hacerlo tambien
// const opciones ={
//     url:'http://localhost:8085/ok', 
//     metodo:'GET'
// };

// ajax(opciones, (data) =>{
//     console.log(data);
// })




// obtenerGestores(gestores => {
//     mostrarGestores(gestores);
// });

async function main() {
    const gestores = await obtenerGestores();
    mostrarGestores(gestores);
}

main();

// función ejecutable
// (async () => {
//     const gestores = await obtenerGestores();
//     mostrarGestores(gestores);
// })();