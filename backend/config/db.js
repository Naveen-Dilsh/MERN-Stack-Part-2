import mongoose from "mongoose";


export const connectDB = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo connected : ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
        process.exit(1) //Process code : 1 code means exist with failure,0 means success
    }
}