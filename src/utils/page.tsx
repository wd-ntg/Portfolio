// src/pages/api/sendEmail.ts

// import type { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// const handler = async (req: NextApiRequest, res: NextApiResponse) => {
//     if (req.method === 'POST') {
//         const { name, email, subject, message, captcha } = req.body;

//         // Verify hCaptcha
//         const captchaSecret =  'ES_0fb91534227e465fa0be65547d219dd7';
//         const captchaResponse = await fetch(`https://hcaptcha.com/siteverify?secret=${captchaSecret}&response=${captcha}`, {
//             method: 'POST',
//         });

//         const captchaData = await captchaResponse.json();
//         if (!captchaData.success) {
//             return res.status(400).json({ message: 'hCaptcha verification failed.' });
//         }

//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 587,
//             secure: false,
//             auth: {
//                 user: 'giangnguyen6777@gmail.com',
//                 pass: '123456',
//             },
//         });

//         try {
//             await transporter.sendMail({
//                 from: email,
//                 to: 'giangnguyen6777@gmail',
//                 subject: subject || 'Liên hệ từ Portfolio',
//                 text: `Bạn có tin nhắn mới từ ${name} (${email}):\n\n${message}`,
//             });

//             res.status(200).json({ message: 'Email sent successfully!' });
//         } catch (error) {
//             console.error(error);
//             res.status(500).json({ message: 'Failed to send email.' });
//         }
//     } 
//     else {
//         res.setHeader('Allow', ['POST']);
//         res.status(405).end(`Method ${req.method} Not Allowed`);
//     }
// };

// export default handler;
