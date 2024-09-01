import News from "../models/news.model.js"

const getAllNews= async (req,res)=>{
   try {
    const news=await News.find({});
    return res.status(200).send(news);
   } catch (error) {
    return res.status(500).send({
        message:"error in getting news",
        error:error.message
    })
   }
}

const getNews= async(req,res)=>{
    try {
      const {id}=req.params;
      const news= await News.findById(id);
    return res.status(200).send(news);
    } catch (error) {
      return res.status(500).send({
          message:"error in getting news",
          error:error.message
      })
    }
  
  }
  
  const createNews=async(req,res)=>{
      try {
          const news=await News.create(req.body);
          return res.status(200).send({message:"news created successfully"})
      } catch (error) {
         return res.status(500).send({
          message:"error in creating news",
          error:error.message
         }) 
      }
  }
   
  const updateNews=async(req,res)=>{
      const {id}=req.params;
      try {
         const news=await News.findByIdAndUpdate(id,req.body,{new:true});
         return res.status(200).send({message:"news updated succesfully"})
  
          
      } catch (error) {
          return res.status(500).send({
              message:"error in updating news",
              error:error.message
          })
      }
  }
  
  const deleteNews=async(req,res)=>{
      const {id}=req.params;
      try {
          const news=await News.findByIdAndDelete(id);
          return res.status(200).send({message:"news deleted successfully"})
          
      } catch (error) {
          return res.status(500).send({
              message:"error deleting news",
              error:error.message
          })
      }
  }



export{
    getAllNews,
    getNews,
    createNews,
    updateNews,
    deleteNews
}