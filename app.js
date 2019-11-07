const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/local_db",{ useNewUrlParser: true }, (err)=>{
    if(!err){
        console.log("MongoB Connected successfully...!");
    }else{
        console.log("Error inconnection:" +JSON.stringify(err, undefined, 2));
    }
})

module.exports = mongoose;