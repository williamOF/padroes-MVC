const express = require ('express')
const app= express()

const indexRouter = require('./router/indexRouter')


app.set('view engine', 'ejs')
app.use(express.static('public'))


app.get('/', indexRouter)
app.get('/about', indexRouter)
app.get('/portifolio', indexRouter)

 
app.listen(8080, p =>console.log('servidor Rodando na porta 8080'))