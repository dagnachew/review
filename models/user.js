var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

//SCHEMA SETUP
var UserSchema = new mongoose.Schema({
    username: {
        type: String,
        // required: true,
        unique: true
    },
    password: {
        type: String,
        // required: true
    }
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);