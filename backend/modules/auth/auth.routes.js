import { Router } from "express";
import validate from "../../middlewares/validate.middleware.js";
import { registerSchema } from "./auth.validation.js";
import { loginSchema } from "./auth.validation.js";
import { register } from "./auth.controller.js";
import { login } from "./auth.controller.js";

const router = Router();

router.post('/register', validate(registerSchema), register);
router.get('/login', validate(loginSchema), login)
export default router;