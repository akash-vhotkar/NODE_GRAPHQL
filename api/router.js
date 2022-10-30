const router  = require('express').Router();

router.get('/name', (req, res)=>{
    return res.status(200).json('Server Working file')
    
})

module.exports  =router;
