import { MailAdapter, SendMailData } from "../mail-adapters";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "924bc232213bff",
        pass: "756d2695f4f2cf"
    }
});

export class NodemailerMailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Brayan Igor <brayanmaximiano01@gmail.com>',
            subject,
            html: body,
        });
    };
}