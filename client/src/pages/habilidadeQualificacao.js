import React from 'react';
import Habilidades from '../components/habilidades/Habilidades';
import Qualificacao from '../components/qualificacoes/Qualificacoes';
import TabelaQualificacao from '../components/tabela/tabelaQualificacao';
import TabelaHabilidades from '../components/tabela/tabelaHabilidade';

//VALIDACOES HABILIDADES 
import ValidacoesHabilidades from '../contexts/ValidacoesHabilidades';
import { validarHabilidades } from '../models/habilidades';
//VALIDACOES QUALIFICAÇÃO
import ValidacoesQualificacao from '../contexts/ValidacoesQualificacao';
import { validarQualificacao } from '../models/qualificacao';

export default function HabilidadeQualificacao() {
    return (
        <>
            <ValidacoesHabilidades.Provider
                value={{ habilidades: validarHabilidades }}
            >
                <Habilidades />
            </ValidacoesHabilidades.Provider>

            
            <ValidacoesQualificacao.Provider
                value={{ nivel: validarQualificacao }}
            >
                <Qualificacao />
            </ValidacoesQualificacao.Provider>
            <TabelaHabilidades />
            <TabelaQualificacao />
            
        </>
    );
}
