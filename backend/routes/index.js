import { Router } from "express";
import authRoutes from "../modules/auth/auth.routes.js";
import patientRoutes from "../modules/patient/patient.routes.js";
import doctorRoutes from "../modules/doctor/doctor.routes.js";
import connectionRoutes from "../modules/connection/connection.routes.js";
const router = Router();

router.use('/auth', authRoutes);
router.use('/patient', patientRoutes);
router.use('/doctor', doctorRoutes);
router.use('/connections', connectionRoutes);

export default router