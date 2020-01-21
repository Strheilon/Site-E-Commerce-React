let express = require('express')
let routerUser = express.Router()
let User = require('../models/users')
let middleware = require('../middlewares.js')

routerUser.get('/',  middleware, (req,res) => {
    User.find({}, (error,results) => {
        res.json(results)
    })
})

routerUser.post('/', (req,res) => { 
    let body = req.body
    let newUser = new User(body)
    newUser.save((error,t) => {
        console.log(t);
        
        if (error) 
            res.send(400, error)
        else 
            res.json("Utilisateur bien ajouté")
    })
})

routerUser.get('/:users', (req,res) => { res.json(req.params.user) })
 
routerUser.delete('/:users', (req,res) => { res.json(req.params.user) })

module.exports = routerUser