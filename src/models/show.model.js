import mongoose from "mongoose";


const showSchema= new mongoose.Schema({
    name:{type:String,required:true},
    poster_path:{type:String,required:true},
    overview:{type:String,required:false},
    vote_count:{type:Number,required:false},
    old_id:{type:Number,required:false}
},
{
    versionKey:false,
    timestamps:true
}
)


const Shows=mongoose.model("Shows",showSchema);

export default Shows;