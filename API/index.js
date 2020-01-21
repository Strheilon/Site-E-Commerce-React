let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let router = require('./router.js')
let routerUser = require('./routers/routerUser.js')
let routerProduct = require('./routers/routerProduct.js')
let routerOrder = require('./routers/routerOrder.js')
let routerAuth = require('./routers/routerAuth.js')
let cors = require ('cors')
let app = express();

app.use (cors ());

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/api', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection
db.once('open', () => {
    console.log('Connexion à la base de donnée réussie', db.client.s.url)
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use('/users', routerUser)
app.use('/products', routerProduct)
app.use('/orders', routerOrder)
app.use('/auth', routerAuth)

app.listen(3001, 'localhost')