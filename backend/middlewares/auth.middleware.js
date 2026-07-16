import ApiError from "../shared/utils/ApiError.js";
import { verifyToken } from "../shared/utils/verifyToken.js";

export const authenticate = async (req,res,next) => {
    try{

        const token = req.cookies.accessToken;
        if(!token){
            throw new ApiError(401, "Access token missing.");
        }

        const decoded = verifyToken(token);


        req.user = decoded;
        next();
    }catch(error){
        next(error);
    }
};