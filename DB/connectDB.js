const mongoose = require ("mongoose")
const MONGO_URI='mongodb://localhost:27017/test'

const connectDB= async () =>{
    
  try  {
      await mongoose.connect(MONGO_URI, {
          useNewUrlParser: true, 
          useUnifiedTopology:true
        })
        console.log("mongo db connected")
    } catch (error) {
    console.log('database not connected ${error}')
}
}
module.exports =connectDB;