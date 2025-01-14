import mongoose from "mongoose"

const ConnectDb = async () => {
    try{
        console.log('connecting to DB...')
       const db =  mongoose.connect(process.env.MONGO_URL)
       if(db){
        console.log('connected to db...')
       }
    }
    catch (e){
        console.log("Failed to connetct to db \n", e)
    }
}
export default ConnectDb