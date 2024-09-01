import Movies from "../models/movie.model.js"


const getAllMovies=async(req,res)=>{
try {
    const movies= await Movies.find({});
    return res.status(200).send(movies)
    
} catch (error) {
    return res.status(500).send({message:"error in getting movies",error:error.message})
}
}

const getMovie= async(req,res)=>{
  try {
    const {id}=req.params;
    const movie= await Movies.findById(id);
  return res.status(200).send(movie);
  } catch (error) {
    return res.status(500).send({
        message:"error in getting movie",
        error:error.message
    })
  }

}

const createMovie=async(req,res)=>{
    try {
        const movie=await Movies.create(req.body);
        return res.status(200).send({message:"Movie created successfully"})
    } catch (error) {
       return res.status(500).send({
        message:"error in creating movie",
        error:error.message
       }) 
    }
}
 
const updateMovie=async(req,res)=>{
    const {id}=req.params;
    try {
       const movie=await Movies.findByIdAndUpdate(id,req.body,{new:true});
       return res.status(200).send({message:"movie updated succesfully"})

        
    } catch (error) {
        return res.status(500).send({
            message:"error in updating movie",
            error:error.message
        })
    }
}

const deleteMovie=async(req,res)=>{
    const {id}=req.params;
    try {
        const movie=await Movies.findByIdAndDelete(id);
        return res.status(200).send({message:"movie deleted successfully"})
        
    } catch (error) {
        return res.status(500).send({
            message:"error deleting movie",
            error:error.message
        })
    }
}


export{
    getAllMovies,
    getMovie,
    createMovie,
    updateMovie,
    deleteMovie
}