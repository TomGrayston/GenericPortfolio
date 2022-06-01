import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";

const transporter = createTransport({
    port: Number(process.env.SMTP_PORT) || 465,
    host: process.env.SMTP_HOST || "smtp.gmail.com",
    auth: {
        user: process.env.DUMMY_EMAIL_USER,
        pass: process.env.DUMMY_EMAIL_PASSWD,
    },
    secure: true,
});

export default async function (req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {
        const data = {
            to: process.env.MY_EMAIL,
            from: process.env.DUMMY_EMAIL_USER,
            subject: `Message From ${req.body.name}`,
            message: req.body.message,
            html: `
            <div>${req.body.message}</div>
            <div> From ${req.body.email}</div>
        `,
        };

        await transporter.sendMail(data, (err) => {
            if (err) {
                res.status(500).json({});
            } else {
                res.status(200).json({})
            }
        });
    }
}
