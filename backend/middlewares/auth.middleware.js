import ApiError from "../shared/utils/ApiError.js";
import { verifyToken } from "../shared/utils/verifyToken.js";

export const authenticate = async (req,res,next) => {
    try{
        // check if req contains header
        const authHeader = req.headers.authorization;
        if(!authHeader){
            throw new ApiError(401, "Authorization header missing");
        }

        // check auth header format
        if(!authHeader.startsWith("Bearer ")){
            throw new ApiError(401, "Invalid authorization format");
        }

        // extract and verify token
        const token = authHeader.split(" ")[1];
        const decoded = verifyToken(token);

        // attach the user details to req
        req.user = decoded;
        next();
    }catch(error){
        next(error);
    }
};