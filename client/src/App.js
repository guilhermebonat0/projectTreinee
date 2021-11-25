import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Container } from '@material-ui/core';
import MenuCabecalho from './components/header/menu-cabecalho';
import Main from '../src/pages/home';
import HabilidadeQualificacao from '../src/pages/habilidadeQualificacao';



function App() {
  return (
    <Container component="article" maxWidth="sm">
      <MenuCabecalho />
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/habilidades" component={HabilidadeQualificacao} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
