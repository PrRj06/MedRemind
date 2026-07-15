import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import patientRoutes from "../modules/patient/patient.routes.js";
const router = Router();

router.use('/auth', authRoutes);
router.use('/patient', patientRoutes);

export default router