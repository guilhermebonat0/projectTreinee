const express = require('express')
const logins = require('./loginRoute')
const habilidades = require("./habilidadesRoute")
const qualificacao = require("./qualificacoesRoute")

module.exports = app => {
    app.use(logins)
    app.use(habilidades)
    app.use(qualificacao)
}