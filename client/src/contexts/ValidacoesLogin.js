import React from 'react';
import { validarEmail } from '../models/login';

const ValidacoesLogin = React.createContext(
    {
        email: semValidacao,
        senha: semValidacao
    }
);
function semValidacao(dados) {
    const validar = validarEmail;
    console.log(validar)
    console.log(dados)
    return { valido:true, texto: "" }
}

export default ValidacoesLogin;