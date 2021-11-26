import React, {useState, useContext } from 'react';
import ValidacoesLogin from '../../contexts/ValidacoesLogin';
import { TextField, Button } from '@material-ui/core';
import '../../assets/estilo.css'
import axios from 'axios';
import { useHistory } from "react-router-dom";

function FormularioLogin({ aoEnviar }) {
  
  
  const [email, setEmail] = useState("");
  const [senhaHash, setSenhahash] = useState("");
  const [erros, setErros] = useState({ email: { valido: true, texto: "" }, senhaHash: { valido: true, texto: "" }});
  

  const validacoes = useContext(ValidacoesLogin)
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

  const history = useHistory();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/login", {email: email, senhaHash: senhaHash })
          .then(() => {
            alert('Cadastro realizado com Sucesso!')
            history.push('/habilidades');
          });
      }}
    >
      <h1 className="titulo">Faça seu Login</h1>
      <TextField
        onBlur={validarCampos}
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        error={!erros.email.valido}
        helperText={erros.email.texto}
        name="email"
        id="email"
        label="Email"
        type="email"
        required
        variant="standard"
        margin="normal"
        fullWidth
      />

      <TextField
        onBlur={validarCampos}
        value={senhaHash}
        onChange={(event) => {
          setSenhahash(event.target.value);
        }}
        error={!erros.senhaHash.valido}
        helperText={erros.senhaHash.texto}
        name="senhaHash"
        id="senhaHash"
        label="Senha"
        variant="standard"
        type="password"
        margin="normal"
        required
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
        Login
      </Button>
    </form>
  );
}
export default FormularioLogin;