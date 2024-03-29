import mongoose from 'mongoose';
let isConnected = false;
export const connectToDb = async ()=>{
    mongoose.set("strictQuery",true);
    if(isConnected){
        console.log("DB is already connected");

    }try {
        await mongoose.connect(process.env.MONGODB_URL,{
            dbname:'Blog',
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        isConnected = true;
        console.log('Mongodb is connected')
    } catch (error) {
        console.log(error)
        
    }
}
