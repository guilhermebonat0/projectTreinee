import React from 'react';
import {FormularioCadastro} from './components/formularioCadastro/FormularioCadastro';
import {MenuCabecalho} from './components/header/menu-cabecalho';
import {Container} from '@material-ui/core';

function App() {
  return (
    <Container component="article" maxWidth="sm">
        {/* <MenuCabecalho/> */}
        <FormularioCadastro/> 
    </Container>
    );
  }

export default App;
