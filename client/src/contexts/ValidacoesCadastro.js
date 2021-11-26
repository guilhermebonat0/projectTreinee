import React from 'react';
import { validaEmail } from '../models/cadastro';

const ValidacoesCadastro = React.createContext(
    {
        usuario: semValidacao,
        email: semValidacao,
        senhaHash: semValidacao
    }
);
function semValidacao(dados) {
    const validar = validaEmail;
    console.log(validar)
    console.log(dados)
    return { valido:true, texto: "" }
}

export default ValidacoesCadastro;