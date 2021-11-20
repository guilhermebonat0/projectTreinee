import {React, useState } from 'react';
import {TextField, Button} from '@material-ui/core'

export function FormularioCadastro({ aoEnviar }) {
   
    const [email, setEmail] = useState(" ");
    const [senha, setSenha] = useState(" ");
    
    console.log(email)
    return (
        <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({ email, senha });
        }}
      >
         
         <TextField
        value={email}
        onChange={(event) => {
            setEmail(event.target.value);
        }}
        id="email"
        label="email"
        type="email"
        required
        variant="filled"
        margin="normal"
        fullWidth
      />

        <TextField
        value={senha}
        onChange={(event) => {
            setSenha(event.target.value);
        }}    
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
