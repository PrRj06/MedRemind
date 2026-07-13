import User from "../user/user.model.js";
import ApiError from "../../shared/utils/ApiError.js";
import { hashPassword } from "../../shared/utils/hashPassword.js";
import { comparePassword } from "../../shared/utils/comparePassword.js";
import { generateToken } from "../../shared/utils/generateToken.js";

export const registerService = async (userData) => {
    const { name, email, password, role } = userData;
    const existingUser = await User.findOne({email});
    if(existingUser){
        throw new ApiError(409, "Email already exists.")
    } 
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        role
    });

    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt,
    };
};

export const loginService = async (userData) => {
    const {email, password} = userData;
    const user = await User.findOne({email});
    if(!user){
        throw new ApiError(401, "Invalid email or password.");
    }

    const passwordMatch = await comparePassword(password, user.password);

    if(!passwordMatch){
        throw new ApiError(401, "Invalid email or password");
    }
    const token = generateToken({
        id: user._id, 
        role: user.role
    });                                                                                                                                                                                                                             

    return {
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
        }
    };
};

export const getCurrentUserService = async (userId) => {
    const user = await User.findById(userId).select("-password");;
    if(!user){
        throw new ApiError(404, "User not found");
    }
    return user;
};