import jwt from "jsonwebtoken"

 export const isAuth = (req, res, next) => {
    try{
        const token = req.cookies.token
        if(!token){
            return res.status(401).json({message:"Unauthorized"})
        }  
         const verifyToken = jwt.verify(token , process.env.JWT_SECRET)
         if(!verifyToken){
            return res.status(401).json({message:"User doesnt have a valid token"})
         }
         req.userId = verifyToken.id
         next() 

    }catch(err){
        return res.status(401).json({message:"isAuth error" , error:err})
    }
}