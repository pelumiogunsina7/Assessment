
import express from "express"
const router = express.Router()
import BuyRequest from "../dataModel/buyRequest.js"


  export const CreateProduct = async(req,res, next) =>{
      const buyRequest = new BuyRequest(req.body)
      try {
       const savedbuyRequest = await buyRequest.save()
              res.json(savedbuyRequest)  
      } catch (err) {
         next(err)
      }
  }
  
  export const UpDateProduct = async(req, res, next) =>{
      try {
          const upDatedbuyRequest = await BuyRequest.findByIdAndUpdate(
              req.params.id,
              {$set:req.body},
              {new:true}
              )
          res.json(upDatedbuyRequest)                             
         } catch (err) {
             next(err)
         }
         
  }
  
  export const GetProduct = async(req, res, next) =>{
      try {
          const buyRequest = await BuyRequest.findById(req.params.id)
              res.json(buyRequest)
      } catch (err) {
          next(err)
      }
  }
  export const GetAllProducts = async(req, res, next) =>{
      try {
         const buyRequests = await BuyRequest.find({})
          res.json(buyRequests)
      } catch (err) {
          next(err)
      }
  }
  
  export const DeleteProduct = async(req, res, next) =>{
      try {
          await BuyRequest.findByIdAndDelete(req.params.id)
              res.status(200).send("Data successfully deleted")
          
      } catch (err) {
         next(err)
      }
  }
    //read d excel file
   /*  try {
      const xlFile = xlsx.readFile("./TradeRequest.xlsx")
      const sheet = xlFile.Sheets[xlFile.SheetNames[0]]
      const f_json = xlsx.utils.sheet_to_json(sheet)     //.utils.sheet_to_json(sheet) 
      await new buyRequest.insertMany(f_json).then((result) =>{
          if(result.length > 0){
              res.send({status:200, message: "success", count: result.length})
          }else{
              res.send("Data not found")
          }
      })
    } catch (error) {
      console.error(error)
    } */
       
  
    //extract it to sheet
  
  
  
  