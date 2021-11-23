import React from 'react';
import {MenuCabecalho} from './components/header/menu-cabecalho';
import {FormularioCadastro} from './components/formularioCadastro/FormularioCadastro';
import {Container} from '@material-ui/core';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';
import { validarEmail, validarSenha } from './models/cadastro';


function App() {
  return (
    <Container component="article" maxWidth="sm">
        <MenuCabecalho/>
        <ValidacoesCadastro.Provider
        value={{email:validarEmail, senha:validarSenha}}
        >
          <FormularioCadastro/>
        </ValidacoesCadastro.Provider> 
        
        
         
    </Container>
    );
  }

export default App;
