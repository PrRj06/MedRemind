import crypto from "crypto";
import User from "../user/user.model.js";
import Doctor from "../doctor/doctor.model.js";
import Patient from "../patient/patient.model.js";
import ApiError from "../../shared/utils/ApiError.js";
import { hashPassword } from "../../shared/utils/hashPassword.js";
import { comparePassword } from "../../shared/utils/comparePassword.js";
import { generateToken } from "../../shared/utils/generateToken.js";
import { generateSecureToken } from "../../shared/utils/generateSecureToken.js";
import { sendVerificationEmail, sendResetPasswordEmail } from "../notification/services/email.service.js";

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

    const {token, hashedToken} = generateSecureToken();
    user.emailVerificationToken = hashedToken;
    user.emailVerificationExpires = new Date(Date.now() + 60 * 60 * 1000);
    await user.save();

    // to create a empty patient document for patient
    if (user.role === "patient"){
        await Patient.create({
            userId: user._id,
        });
    }

    // to create a empty doctor document for patient
    if (user.role === "doctor"){
        await Doctor.create({
            userId: user._id,
        });
    }

    // email sending with verfication link
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

    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;
    await user.save();

    return {
        success: true,
        message: "Email verified successfully.",
    };
};

export const forgetPasswordService = async (email) => {

    user.emailVerified = true;
    user.emailVerificationToken = null;
    user.emailVerificationExpires = null;
    await user.save();

    return {
        success: true,
        message: "Email verified successfully.",
    };
};

export const forgotPasswordService = async (email) => {
    const user = await User.findOne({email});
    if(!user){
        return {
            success: true,
            message: "If an account with that email exists, a password reset link has been sent."
        };
    }

    const {token, hashedToken} = generateSecureToken();
    user.passwordResetToken = hashedToken;
    user.passwordResetExpires = new Date(Date.now() + 60 * 60 * 1000);
    await user.save();
    
    try {
        await sendResetPasswordEmail({user, token});
    } catch (error) {
        console.error("Reset password email failed:", error);
    }

    return {
        success: true,
        message: "If an account with that email exists, a password reset link has been sent."
    };
};

export const resetPasswordService = async (token, password) => {
    const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { 
            $gt: new Date()
        },
    });

    if(!user){
        throw new ApiError(400,"Invalid or expired token.");
    }

    user.password = password;
    user.passwordResetToken = null;
    user.passwordResetExpires = null;
    await user.save();

    return {
        success: true,
        message: "Password has been reset successfully. You can now log in with your new password."
    };

}