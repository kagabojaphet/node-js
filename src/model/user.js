import mongoose from "mongoose";

const userschemas=new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    confirmpassword:{
        type:String,
        require:true
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:user
    },
    createdate:{
        type:Date,
        default:Date.now()
    }
});
const usersmodel=mongoose.model("usersmodel",userschemas)
export default usersmodel