function generarGestores() {
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

    const gestores = [gestor1, gestor2, {
        id: 3,
        usuario: 'gestor3',
        password: 'gestor3',
        correo: 'gestor3@mail.com'
    }];

    return gestores;
    
}

function generarClientes() {
    const cliente1={
        id:1,
        id_gestor:2,
        usuario: 'Macarena',
        password:'macarena01',
        correo:'macarena@gmail.com',
        saldo:8000
    };
    
    const cliente2={
        id:2,
        id_gestor:1,
        usuario:'Victor',
        password:'Victor02',
        correo:'victor@gmail.com',
        saldo:5000
    };
    
    const cliente3={
        id:3,
        id_gestor:1,
        usuario:'Marina',
        password:'Marina03',
        correo:'marina@gmail.com',
        saldo:4000
    };

    const clientes = [cliente1, cliente2, cliente3];
        clientes.push(
            {
                id: 4,
                id_gestor: 1,
                usuario: 'cliente4',
                password: 'cliente4',
                correo:'cliente4@gmail.com',
                saldo: 1230  
            }
    );

        return clientes;
}

