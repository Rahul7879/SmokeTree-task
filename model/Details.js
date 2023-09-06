import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    }
});

const Details =  mongoose.model('details', userSchema); 

export default Details;

