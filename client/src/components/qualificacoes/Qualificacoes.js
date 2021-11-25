import React, {useState, useContext } from 'react';
import ValidacoesQualificacao from '../../contexts/ValidacoesQualificacao';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

function Qualificacao() {
  
  const [nivel, setNivel] = useState("");
  const [erros, setErros] = useState({ nivel: { valido: true, texto: "" }});
  

  const validacoes = useContext(ValidacoesQualificacao)
  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }else {
        return true;
      }
    }  
  }


  return (
    <form
    onSubmit={(event) => {
      event.preventDefault();
      axios.post("http://localhost:3001/qualificacoes", {nivel: nivel})
        .then(() => {
          alert('Qualificação cadastrada com Sucesso!')
        });
    }}
  >

      <TextField
        onBlur={validarCampos}
        value={nivel}
        onChange={(event) => {
          setNivel(event.target.value);
        }}
        error={!erros.nivel.valido}
        helperText={erros.nivel.texto}
        name="nivel"
        id="nivel"
        label="Qualificação"
        type="text"
        required
        variant="standard"
        margin="normal"
        fullWidth
      />


      <Button
        onClick={possoEnviar}
        variant="contained"
        margin="normal"
        padding="10"
        fullWidth
        size="large"
        type="submit"
      >
        Cadastrar Qualificação
      </Button>
    </form>
  );
}
export default Qualificacao;