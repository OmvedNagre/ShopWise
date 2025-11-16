import mongoose from "mongoose";

const connectDB = async () =>{

    await mongoose.connection.on('connected',()=>{
        console.log("DB Connected")
    })

    await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`)
}

export default connectDB;