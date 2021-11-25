import React from 'react';
import { validarHabilidades } from '../models/habilidades';

const ValidacoesHabilidades = React.createContext(
    {
        habilidades: semValidacao,
    }
);
function semValidacao(dados) {
    const validar = validarHabilidades;
    console.log(validar)
    console.log(dados)
    return { valido:true, texto: "" }
}

export default ValidacoesHabilidades;