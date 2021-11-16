import React from 'react';
import {Navbar, Container, Offcanvas, Nav, Form, FormControl, Button } from 'react-bootstrap'
import "./estilo.css"


export function MenuCabecalho (){
    
    return (
        <Navbar bg="light" expand={false}>
        <Container fluid>
        <Navbar.Brand href="#">Galeria de Habilidades</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
        placement="end"
        >
        <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Galeria de Habilidades</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
        <Nav.Link href="#action3">Configurações</Nav.Link>
        </Nav>
        <Form className="d-flex">
        <FormControl
         type="search"
         placeholder="Pesquise aqui"
         className="me-2"
         aria-label="Search"
        />
        <Button variant="outline-success">Pesquisa</Button>
        </Form>
        </Offcanvas.Body>
        </Navbar.Offcanvas>
        </Container>
        </Navbar>
        );
    }

