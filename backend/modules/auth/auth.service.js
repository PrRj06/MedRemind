import User from "../user/user.modal.js";
import { hashPassword } from "../../shared/utils/hashPassword.js";
import ApiError from "../../shared/utils/ApiError.js";

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