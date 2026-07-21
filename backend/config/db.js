import mongoose  from "mongoose";

 async function dbConnect(){
    try{
        await mongoose.connect(process.env.MONGOURL);
        console.log("Database connected successfully");
        
    }
    catch(e){
        console.log("failed to connect with database");
        
    }
}

export default dbConnect