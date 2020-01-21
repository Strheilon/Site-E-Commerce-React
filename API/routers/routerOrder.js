let express = require('express')
let routerOrder = express.Router()
let Order = require('../models/order.js')
let middleware = require('../middlewares')

routerOrder.post('/', middleware, (req,res) => { 
    let body = req.body
    body.user = req.users.id
    let newOrder = new Order(body)
    newOrder.save((error) => {
        if (error) 
            res.send(400, error)
        else 
            res.json(newOrder)
    })
})

routerOrder.get('/', (req,res) => {
    Order.find({}, (error,results) => {
        res.json(results)
    })
})

routerOrder.get('/:orders', (req,res) => { res.json(req.params.id) })
 
routerOrder.delete('/:orders', (req,res) => { res.json(req.params.id) })

module.exports = routerOrder