var mongoose = require('mongoose');

// schema 

var user_schema = new mongoose.Schema({
    user_no : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    }

});

// module

module.exports = mongoose.model('users',user_schema);