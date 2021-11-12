import React, { Component } from 'react';
import {FormularioCadastro} from './components/formularioCadastro/FormularioCadastro';
import {MenuCabecalho} from './components/header/menu-cabecalho';

class App extends Component {
  render(){
    return (
      <section>
        <MenuCabecalho/>
        <FormularioCadastro/>
    </section>
    );
  }
}

export default App;
