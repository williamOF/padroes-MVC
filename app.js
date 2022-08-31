const express = require ('express')
const app= express()

const indexRouter = require('./router/indexRouter')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/' , (req,res)=>{res.send('BemVindo')})

app.get('/home',indexRouter)



app.listen(8080, p =>console.log('servidor Rodando na porta 8080'))