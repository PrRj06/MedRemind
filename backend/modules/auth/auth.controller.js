import { registerService } from "./auth.service.js";
import { loginService } from "./auth.service.js";
import { getCurrentUserService } from "./auth.service.js";

export const register = async (req, res, next) => {
    try{
        const user = await registerService(req.body)

        return res.status(201).json({
            success: true,
			message: "User registered successfully",
			data: {
				user,
			},
        });
    }catch(error){
        next(error);
    }
};

export const login = async (req, res, next) => {
    try{
        const data = await loginService(req.body);
        
        return res.status(200).json({
            success: true,
            message: "Login successful",
            data,
        });
    }catch(error){
        next(error);
    }
};

export const getCurrentUser = async (req,res,next) => {
    try{

        const user = await getCurrentUserService(req.user.id);
        return res.status(200).json({
            success: true,
            data: {
                user,
            },
        });
    }catch(error){
        next(error);
    }
};