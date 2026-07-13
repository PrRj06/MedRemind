import crypto from "crypto";
import User from "../user/user.model.js";
import ApiError from "../../shared/utils/ApiError.js";
import { hashPassword } from "../../shared/utils/hashPassword.js";
import { comparePassword } from "../../shared/utils/comparePassword.js";
import { generateToken } from "../../shared/utils/generateToken.js";
import { generateVerificationToken } from "../../shared/utils/generateVerificationToken.js";
import { sendVerificationEmail } from "../notification/services/email.service.js";

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

    const {token, hashedToken} = generateVerificationToken();
    console.log("Raw verification token:", token);
    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpires = new Date(Date.now() + 60 * 60 * 1000);
    await user.save();

    try {
        await sendVerificationEmail({user, token});
    } catch (error) {
        console.error("Verification email failed:", error);
    }

    return {
        success: true,
        message: "Registration successful. Please check your email to verify your account.",
        user: {
            id: user._id,
            name: user.name,
            email: user.email,
            role: user.role,
            emailVerified: user.emailVerified,
            createdAt: user.createdAt,
        }
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
            emailVerified: user.emailVerified,
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

export const verifyEmailService = async (token) => {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");

    const user = await User.findOne({
        emailVerificationToken: hashedToken,
        emailVerificationExpires: { 
            $gt: new Date()
        },
    });

    if(!user){
        throw new ApiError(400, "Invalid or expired verification token.");
    }

    user.emailVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;
    await user.save();

    return {
        success: true,
        message: "Email verified successfully.",
    };
};