import React from 'react';
import { validarEmail } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
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
}//problema está aqui 

export default ValidacoesCadastro;