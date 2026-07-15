import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import { getMyProfile } from "./patient.controller.js";

const router = Router();

router.get('/me',authenticate, getMyProfile);
export default router;