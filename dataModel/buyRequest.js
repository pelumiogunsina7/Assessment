import mongoose from "mongoose";

const buySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    storageSize:{
        type: String,
        required: true
    },
    Grade:{
        type: String,
        required: true
    },
    Price:{
        type: String,
        required: true
    },
    Availability:{
        type: String
    },
})

buySchema.set('toJSON', {
    transform:(document, returendObj) =>{
      returendObj.id = returendObj._id.toString()
      delete returendObj._id
      delete returendObj.__v
    }
  })

export default mongoose.model("BuyRequest", buySchema)