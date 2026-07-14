import ApiError from "../shared/utils/ApiError.js";
import { verifyToken } from "../shared/utils/verifyToken.js";

export const authenticate = async (req,res,next) => {
    try{
        // check if req contains accessToken
        const token = req.cookies.accessToken;
        if(!token){
            throw new ApiError(401, "Access token missing.");
        }

        // verify token
        const decoded = verifyToken(token);

        // attach the user details to req
        req.user = decoded;
        next();
    }catch(error){
        next(error);
    }
};