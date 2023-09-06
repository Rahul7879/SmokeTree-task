import mongoose from "mongoose";

main().catch(err=> console.log(err));

async function main(){
    mongoose.connect('mongodb://127.0.0.1:27017/smoketree');
    console.log("Database connected successfully")
}