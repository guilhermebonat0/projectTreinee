const express = require('express')
const logins = require('./loginRoute')
const habilidades = require("./habilidadesRoute")

module.exports = app => {
    app.use(express.urlencoded({ extended: true }))
    app.use(logins)
    app.use(habilidades)
}