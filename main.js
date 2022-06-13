/*
Escribe un programa que almacene los objetos creados en el ejercio anterior del proyecto dentro de un array (un array por cada modelo de datos). A continuación, recorre cada uno de los arrays y muestra todas propiedades..
*/

const gestor1 = {
    id:1,
    usuario:'gestor1',
    password:'gestor1',
    correo:'gestor1@gmail.com'
};
const gestor2 ={
    id:2,
    usuario:'gestor2',
    password:'gestor2',
    correo:'gestor2@gmail.com'
};

const cliente1={
    id:01,
    id_gestor:2,
    usuario: 'Macarena',
    password:'macarena01',
    correo:'macarena@gmail.com',
    saldo:8000
};

const cliente2={
    id:02,
    id_gestor:1,
    usuario:'Victor',
    password:'Victor02',
    correo:'victor@gmail.com',
    saldo:5000
}

const cliente3={
    id:03,
    id_gestor:1,
    usuario:'Marina',
    password:'Marina03',
    correo:'marina@gmail.com',
    saldo:4000
}

const clientes = [gestor1, gestor2, {
    id: 3,
    usuario: 'gestor3',
    password: 'gestor3',
    correo: 'gestor3@mail.com'
}];

const clientes = [cliente1, cliente2, cliente3];
clientes.push({
    id: 04,
    id_gestor: 1,
    usuario: 'cliente4',
    password: 'cliente4',
    correo:'cliente4@gmail.com',
    saldo: 1230  
});
// gestores es un array
// gestor es un objeto con las propiedades: id, usuario, password, correo
console.log('---GESTORES---------');
for (const gestor of clientes){
    console.log(`id: ${gestor.id}`);
    console.log(`usuario: ${gestor.usuario}`);
    console.log(`password: ${gestor.password}`);
    console.log(`correo: ${gestor.correo}`);
    console.log('-----');
}
console.log('---CLIENTES---------');
for (const cliente of clientes){
    console.log(`id: ${cliente.id}`);
    console.log(`usuario: ${cliente.usuario}`);
    console.log(`password: ${cliente.password}`);
    console.log(`correo: ${cliente.correo}`);
    console.log(`saldo: ${cliente.saldo}`);
    console.log('-----');
    
}


// todos los gestores
//console.log(gestores);

// primer gestor
//console.log(gestores[0]);
//console.log(gestor1);
//console.log(cliente2);