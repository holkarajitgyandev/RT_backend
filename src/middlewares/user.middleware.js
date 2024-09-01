import { verifyToken } from "../utilities/jwt.js";



const authentication=async(req,res,next)=>{
try {
    const token=  req.cookies.authtoken;
    if(!token){
         return res.status(401).send({message:"unauthorized"})
    }
    const decoded=  verifyToken(token)
    console.log(decoded);
    next();
} catch (error) {
    return res.status(500).send({message:"error in authorizing the user",error:error.message})
}
}


export{
    authentication
}