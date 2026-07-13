import { Router } from "express";
import validate from "../../middlewares/validate.middleware.js";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { loginSchema, registerSchema, verifyEmailSchema } from "./auth.validation.js";
import { login, register, verifyEmail } from "./auth.controller.js";
import { getCurrentUser } from "./auth.controller.js";

const router = Router();

router.post('/register', validate(registerSchema), register);
router.get('/login', validate(loginSchema), login)
router.get('/me', authenticate, getCurrentUser);
router.post('/verify-email', validate(verifyEmailSchema), verifyEmail);
export default router;