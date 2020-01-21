let express = require('express')
let routerProduct = express.Router()
let Product = require('../models/products.js')

routerProduct.get('/', (req,res) => {
    Product.find({}, (error,results) => {
        res.json(results)
    })
})

routerProduct.post('/', (req,res) => { 
    let body = req.body
    let newUser = new Product(body)
    newUser.save((error) => {
        if (error) 
            res.send(400, error)
        else 
            res.json(newUser)
    })
})

routerProduct.delete('/:id', (req,res) => {
    var id = req.params.id;
    Product.findByIdAndDelete(id, (err,del) => {
        if(err) console.log(err);
        console.log("Successful deletion");
        res.json(del)
      })
})

routerProduct.get('/:product', (req,res) => { res.json(req.params.user) })
 
routerProduct.delete('/:product', (req,res) => { res.json(req.params.user) })

module.exports = routerProduct