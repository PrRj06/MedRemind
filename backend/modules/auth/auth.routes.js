import { Router } from "express";
import validate from "../../middlewares/validate.middleware.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { loginSchema, registerSchema, verifyEmailSchema, forgetPasswordSchema, resetPasswordSchema } from "./auth.validation.js";
import { login, register, verifyEmail,forgotPassword, resetPassword } from "./auth.controller.js";
import { getCurrentUser } from "./auth.controller.js";

const router = Router();

router.post('/register', validate(registerSchema), register);
router.get('/login', validate(loginSchema), login)
router.get('/me', authenticate, getCurrentUser);
router.post('/verify-email', validate(verifyEmailSchema), verifyEmail);
router.post('/forgot-password', validate(forgetPasswordSchema),forgotPassword );
router.post('/reset-password', validate(resetPasswordSchema), resetPassword);
export default router;