import nodemailer from "nodemailer";
import { EmailInterface } from "../../interface/EmailInterface";

export default async function sendEmail(email: EmailInterface) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false,
    requireTLS: true,
    auth: {
      user: process.env.TASKHUB_MAIL,
      pass: process.env.TASKHUB_MAIL_PASS,
    },
  });
  await transporter.sendMail(email);
}
