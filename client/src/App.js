import React from 'react';
import {FormularioCadastro} from './components/formularioCadastro/FormularioCadastro';
import {MenuCabecalho} from './components/header/menu-cabecalho';

function App() {
  return (
    <section>
        <MenuCabecalho/>
        <FormularioCadastro/> 
    </section>
    );
  }

export default App;
