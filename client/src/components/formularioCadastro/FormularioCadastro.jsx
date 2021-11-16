import React from 'react';
import {FloatingLabel, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import "./estilo.css"

export function FormularioCadastro() {

    return (
            <form className="formLogin">
                <FloatingLabel
                controlId="floatingInput"
                label="Email"
                className="mb-3"
                >
                <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Senha">
                <Form.Control type="password" placeholder="Password" />
                <Button variant="dark" id="botaoLogin">Login</Button>
                <Button variant="dark" id="botaoCadastro">Cadastrar-se</Button>
                </FloatingLabel>
            </form>
                
            );
}
