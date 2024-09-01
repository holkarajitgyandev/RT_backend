

import mongoose from "mongoose";


const newsSchema=new mongoose.Schema({
    title:{type:String,required:true},
    image_url:{type:String,required:false},
    description:{type:String,required:false},
    link:{type:String,required:true},
    pubDate:{type:String,required:false}
    

},
{
    versionKey:false,
    timestamps:true
})


const News=mongoose.model("News",newsSchema);

export default News;