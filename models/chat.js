const mongoose = require("mongoose");//s3

const chatSchema =new mongoose.Schema({
    from:{
        type:String, 
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    msg:{
        type:String,
        maxLength:200,
    },
    created_at:{
        type:Date,
        required:true,
    }
});

const Chat = mongoose.model("Chat",chatSchema);

module.exports = Chat;