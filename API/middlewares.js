let jwt = require('jsonwebtoken')

const checkToken = (req,res,next) => {
    let token = req.headers['authorization'].split(' ')[1]
    jwt.verify(token, "tpisitech", function(err, decoded) {
        if(err)
            res.json(err)
        req.users = decoded
        next()
    })
    
}

module.exports = checkToken