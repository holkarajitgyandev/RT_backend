import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema= new mongoose.Schema(
    {
        name:{type:String, required:true},
        email:{type:String,required:true,unique:true},
        password:{type:String,required:true},
        mobilenumber:{type:Number,required:false},
        profilepicture:{type:String,required:false}

    },
    {
        timestamps:true,
        versionKey:false
    }


)

userSchema.pre("save", async function(next){
    if(!this.isModified("password")){
        next()
    }
     try {
        const salt=await bcrypt.genSaltSync(10);
        this.password=await bcrypt.hash(this.password,salt);
     } catch (error) {
        console.log("error hashing password",error)
        next(error)
        
     }
})
 userSchema.methods.matchPassword= async function(enteredpassword){
    return bcrypt.compareSync(enteredpassword,this.password);
 }
const User=mongoose.model("User",userSchema)
 export default User;

