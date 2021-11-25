import React from 'react';
import { validarQualificacao } from '../models/qualificacao';

const ValidacoesQualificacao = React.createContext(
    {
        nivel: semValidacao,
    }
);
function semValidacao(dados) {
    const validar = validarQualificacao;
    console.log(validar)
    console.log(dados)
    return { valido:true, texto: "" }
}

export default ValidacoesQualificacao;