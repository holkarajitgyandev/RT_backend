import mongoose from "mongoose";

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("connected to DB")
    } catch (error) {
        console.error("error connecting to DB",error)
    }
}


export default connectDB;