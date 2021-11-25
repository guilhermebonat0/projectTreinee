const express = require('express')
const cors = require('cors')
const app = express()

const routes = require('./api/routers/index.js')

app.use(cors())
app.use(express.json())

app.use(express.urlencoded({ extended: false }));
routes(app)


app.listen(3001, () => {console.log('Servidor rodando na porta 3001')})