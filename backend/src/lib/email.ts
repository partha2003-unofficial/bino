import { Resend } from "resend";
import { env } from "./env";

export async function sendRegistrationEmail(email: string, userName: string) {
    //if there is no api key then print the email in the terminal
    if (!env.RESEND_API_KEY) {
        console.log(`[email preview] Welcome ${userName}, sent to ${email}`)
        return 'preview';
    }

    try {
        const resend = new Resend(env.RESEND_API_KEY);
        const { error } = await resend.emails.send({
            from: env.EMAIL_FROM,
            to: email,
            subject: "Welcome to Exchange!",
            text: `Hi ${userName},\n\nWelcome to Exchange! Your account is ready.`,
        })

        if (error) {
            console.log('wellcome email falied !', error.message)
            return 'failed'
        }

        return 'send';

    } catch (error) {
        console.log('wellcome email is failed !', error)
        return 'Failed';
    }
}