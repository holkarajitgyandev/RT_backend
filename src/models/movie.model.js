import mongoose from "mongoose";


const movieSchema= new mongoose.Schema({
    old_id:{type:Number,required:false},
    title:{type:String,required:true},
    poster_path:{type:String,required:true},
    overview:{type:String,required:false},
    review:{type:String,required:false},
    vote_average:{type:Number,required:false}
},
{
    versionKey:false,
    timestamps:true
}
)

const Movies=mongoose.model("Movies",movieSchema);


export default Movies;