import mongoose from "mongoose";
import{db_name} from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${db_name}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
        // console.log(connectionInstance);
        
    } catch (error) {
        console.log("MONGODB connection error",error);
        process.exit(1);
    }
}

export default connectDB;


