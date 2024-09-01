import Shows from "../models/show.model.js"


const getAllShows=async (req,res)=>{
try {
    const shows= await Shows.find({})
    return res.status(200).send(shows)
    
} catch (error) {
  return res.status(500).send({
    message:"error in getting shows",
    error:error.message
  })  
}
}

const getShow= async(req,res)=>{
  try {
    const {id}=req.params;
    const show= await Shows.findById(id);
  return res.status(200).send(show);
  } catch (error) {
    return res.status(500).send({
        message:"error in getting show",
        error:error.message
    })
  }

}

const createShow=async(req,res)=>{
    try {
        const show=await Shows.create(req.body);
        return res.status(200).send({message:"show created successfully"})
    } catch (error) {
       return res.status(500).send({
        message:"error in creating show",
        error:error.message
       }) 
    }
}
 
const updateShow=async(req,res)=>{
    const {id}=req.params;
    try {
       const movie=await Shows.findByIdAndUpdate(id,req.body,{new:true});
       return res.status(200).send({message:"show updated succesfully"})

        
    } catch (error) {
        return res.status(500).send({
            message:"error in updating show",
            error:error.message
        })
    }
}

const deleteShow=async(req,res)=>{
    const {id}=req.params;
    try {
        const show=await Shows.findByIdAndDelete(id);
        return res.status(200).send({message:"show deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({
            message:"error deleting show",
            error:error.message
        })
    }
}

export  {
  getAllShows,
  getShow,
  createShow,
  updateShow,deleteShow
}