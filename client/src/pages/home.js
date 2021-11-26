import React from 'react';
import FormularioLogin from '../components/formularioLogin/FormularioLogin';
import FormularioCadastro from '../components/formularioCadastro/FormularioCadastro';

//VALIDACOES LOGIN 
import ValidacoesLogin from '../contexts/ValidacoesLogin';
import { validarEmail, validarSenha } from '../models/login';

//VALIDACOES CADASTRO 
import ValidacoesCadastro from '../contexts/ValidacoesCadastro';
import { validaUsuario, validaEmail, validaSenha } from '../models/cadastro';


export default function Main() {
    return (
        <>

            <ValidacoesLogin.Provider
                value={{ email: validarEmail, senhaHash: validarSenha }}
            >
                <FormularioLogin />
            </ValidacoesLogin.Provider>


            <ValidacoesCadastro.Provider
                value={{usuario:validaUsuario, email: validaEmail, senhaHash: validaSenha }}
            >
                <FormularioCadastro />
            </ValidacoesCadastro.Provider>
        </>
    );
}
