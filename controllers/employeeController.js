const express = require('express');
var router = express.Router();

var {Employee} = require('../models/employee');

router.get('/list',(req,res) =>{
    Employee.find((err,docs)=>{
        if(!err) {res.send(docs); }
        else{ console.log("Error while retrieving data from employee..." + JSON.stringify(err, undefined, 2))}
    })
});

module.exports = router;