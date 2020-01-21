let express = require('express')
let routerAuth = express.Router()
let customers = require('../models/users')
let sha256 = require('sha256')
let jwt = require('jsonwebtoken')
let ip  = require ('ip')
let tabIp = []

//http://localhost:3000/auth?ml=shl@gmail.com
routerAuth.get('/', (req,res) => {
    customers.findOne({email: req.query.ml}, (error,result) => {
        let challenge = sha256(result._id + result.password + Date.now())
        res.json({challenge})
    })
})

//http://localhost:3000/auth
routerAuth.post('/', (req,res) => {
    let response = req.body.response
    let email = req.body.email
    let challenge = req.body.challenge
    customers.findOne({email: email}, (error,result) => {
        try {
            if (result != null) {
                let serverResponse = sha256(challenge + result.password + 'Isitech')
                if (response === serverResponse) {
                    let token = jwt.sign({
                        id: result._id,
                        name: result.name,
                        email: result.email
                    }, "tpisitech")
                    tabIp.splice(0,0, ip.address())
                    res.json({token})
                    } else {
                        res.status(401).send({message: "Utilisateur Introuvable", error: "Unauthorized"})
                        tabIp.splice(0,0, ip.address())
                    }
                } else {
                    throw Error("")
                }
        } catch (error) {
            res.status(400).send({message: error.message, error: error})
        }  
    })
})

<routerAuth.delete('/:id', (req,res) => {
    Customers.findByIdAndDelete({_id: req.params.id}, (error,results) => {
        res.json("Utilisateur bien supprimé")
    })
})



routerAuth.get('/:auth', (req,res) => { res.json(req.params.user) })
 
routerAuth.delete('/:auth', (req,res) => { res.json(req.params.user) })

module.exports = routerAuth

