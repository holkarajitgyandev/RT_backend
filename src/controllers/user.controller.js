import User from "../models/user.model.js";
import { createToken } from "../utilities/jwt.js";



const register= async(req,res)=>{
 try {
    const {name,email,password} = req.body;
    const user= await User.create({
        name,
        email,
        password
    })
    return res.status(201).send({message:"user registered successfully"})
 } catch (error) {

    return res.status(500).send({message:"error registering user",error:error.message})
    
 }
}
const login =async (req,res)=>{
    try {
       const{email,password}=req.body;
       const user= await User.findOne({email});
       if(!user){
        res.status(400).send({message:"invalid credentials"})   
       }
       const matchpassword= await user.matchPassword(password)
       if(!matchpassword){
           res.status(400).send({message:"invalid credentials"})  
       }
       const token =createToken({id:user._id});
       res.cookie("authtoken", token, {
        path:"/",
        expires: new Date(Date.now()+3600000),
        secure:true,
        httpOnly:true,
        sameSite:"none"
       })
       return res.status(200).send({message:"user logged in successfully", token:token})
    } catch (error) {
   
      return res.status(500).send({message:"error in logging the user",error:error.message}) 
    }
   }


   const logout=async(req,res)=>{
    res.clearCookie("authtoken");
    return res.status(200).send({message:"user logged out successfully "})

   }

   const deleteUser=async(req,res)=>{
       try {
        const {id}=req.params;
        const user=   User.findByIdAndDelete(id);
        if(!user){
           return res.status(404).send({message:"user not found"})
        }
        res.status(200).send({message:"user deleted successfully"})
        
       } catch (error) {
        return res.status(501).send({message:"error in deleting user",error:error.message})
       }

   }
   


export {
    register,
    login,
    logout,
    deleteUser
}