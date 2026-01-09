import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();


export const connect=()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>console.log("DB connected succesfully"))
    .catch((error)=>{
        console.log(error);
        console.log("Error in Database Connection");
        process.exit(1);
    })
}