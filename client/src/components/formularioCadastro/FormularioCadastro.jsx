import React, {useState, useContext } from 'react';
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import { TextField, Button } from '@material-ui/core';


export function FormularioCadastro({ aoEnviar }) {
  
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erros, setErros] = useState({ email: { valido: true, texto: "" }, senha: { valido: true, texto: "" }});
  

  const validacoes = useContext(ValidacoesCadastro)
  function validarCampos(event) {
    const { name, value } = event.target;
    const novoEstado = { ...erros };
    novoEstado[name] = validacoes[name](value);
    setErros(novoEstado);
    console.log(novoEstado)
  }

  function possoEnviar() {
    for (let campo in erros) {
      if (!erros[campo].valido) {
        return false;
      }
    }
    return true;
  }


  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (possoEnviar()) {
          aoEnviar({ email, senha })
        }
      }}
    >

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
        variant="filled"
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
        variant="filled"
        type="password"
        margin="normal"
        required
        fullWidth
      />

      <Button
        variant="contained"
        margin="normal"
        size="large"
        type="submit"
        fullWidth
      >
        Fazer Cadastro
      </Button>

      <Button
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
