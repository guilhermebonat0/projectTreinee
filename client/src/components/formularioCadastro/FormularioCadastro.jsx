import React, { useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

function FormularioCadastro() {

  const [usuario, setUsuario] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ usuario: { valido: true, texto: "" }, email: { valido: true, texto: "" }, senha: { valido: true, texto: "" } });


  const validacoes = useContext(ValidacoesCadastro)
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
      } else {
        return true;
      }
    }
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        axios.post("http://localhost:3001/cadastro", { usuario: usuario, email: email, senha: senha })
          .then(() => {
            alert('Cadastro realizado com Sucesso!')
          });
      }}
    >

      <TextField
        onBlur={validarCampos}
        value={usuario}
        onChange={(event) => {
          setUsuario(event.target.value);
        }}
        error={!erros.usuario.valido}
        helperText={erros.usuario.texto}
        margin="normal"
        required
        name="usuario"
        id="usuario"
        label="Usuario"
        variant="standard"
        fullWidth />

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
        value={senha}
        onChange={(event) => {
          setSenha(event.target.value);
        }}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name="senha"
        id="senha"
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
        size="large"
        type="submit"
        fullWidth
      >
        Fazer Cadastro
      </Button>
    </form>
  );

}
export default FormularioCadastro;