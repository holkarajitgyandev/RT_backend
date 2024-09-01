import jwt from "jsonwebtoken";




const createToken=(data)=>{
return jwt.sign(data,process.env.JWT_KEY,{
    expiresIn:"1d"
})
}

const verifyToken=(token)=>{
   return jwt.verify(token,process.env.JWT_KEY)
}



export {createToken,verifyToken}