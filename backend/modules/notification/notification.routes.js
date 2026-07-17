import { Router } from "express";
import { authenticate } from "../../middlewares/auth.middleware.js";
import {
    getMyNotifications,
    markNotificationRead,
    markAllNotificationsRead,
} from "./notification.controller.js";

const router = Router();

router.use(authenticate);

router.get("/", getMyNotifications);
router.patch("/:id/read", markNotificationRead);
router.patch("/read-all", markAllNotificationsRead);

export default router;
