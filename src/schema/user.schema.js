import mongoose from '../config/dbConnection.js';

const userSchema = new mongoose.Schema({
    user_name: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    contact_number:{
        type:Number
    }

})

export default mongoose.model('user', userSchema)