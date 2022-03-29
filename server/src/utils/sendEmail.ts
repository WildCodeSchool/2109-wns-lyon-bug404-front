import nodemailer from "nodemailer";
import { EmailInterface } from "../../interface/EmailInterface";

export default async function sendEmail(email: EmailInterface) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    secure: false, // true for 465, false for other ports
    requireTLS: true,
    auth: {
      user: "clementbacquet1@gmail.com", // generated ethereal user
      pass: "wojixqcbocmygvdc",
    },
  });
  await transporter.sendMail(email);
}
