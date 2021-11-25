import React, {useState, useContext } from 'react';
import ValidacoesHabilidades from '../../contexts/ValidacoesHabilidades';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

function Habilidades() {
  
  const [habilidades, setHabilidades] = useState("");
  const [erros, setErros] = useState({ habilidades: { valido: true, texto: "" }});
  

  const validacoes = useContext(ValidacoesHabilidades)
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
      axios.post("http://localhost:3001/habilidades", { habilidades:habilidades})
        .then(() => {
          alert('Habilidade cadastrada com Sucesso!')
        });
    }}
  >

      <TextField
        onBlur={validarCampos}
        value={habilidades}
        onChange={(event) => {
          setHabilidades(event.target.value);
        }}
        error={!erros.habilidades.valido}
        helperText={erros.habilidades.texto}
        name="habilidades"
        id="habilidades"
        label="Habilidade"
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
        Cadastrar Habilidade
      </Button>
    </form>
  );
}
export default Habilidades;