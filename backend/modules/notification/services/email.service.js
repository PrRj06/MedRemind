import { sendEmail } from "../providers/email.provider.js";
import { verificationTemplate } from "../templates/verification.template.js";

export const sendVerificationEmail = async ({user, token}) => {
    const verificationLink = `${process.env.CLIENT_URL}/verify-email?token=${token}`;
    
    const html = verificationTemplate({
        name: user.name,
        verificationLink
    });

    await sendEmail({
        to: user.email,
        subject: "Verify your MedRemind Account",
        html,
    });
};