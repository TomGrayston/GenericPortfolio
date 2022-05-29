import { NextApiRequest, NextApiResponse } from "next";
import { createTransport } from "nodemailer";
import 'dotenv/config';

export default function (req: NextApiRequest, res: NextApiResponse) {
    const transporter = createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.DUMMY_EMAIL_USER,
            pass: process.env.DUMMY_EMAIL_PASSWD,
        },
        secure: true
    })

    const data = {
        to : process.env.MY_EMAIL,
        from: process.env.DUMMY_EMAIL_USER,
        subject: `Message From ${req.body.name}`,
        message: req.body.message,
        html: `
            <div>${req.body.message}</div>
            <div> From ${req.body.email}</div>
        `
    }

    transporter.sendMail(data, (err,info) => {
        if (err) {
            console.error(err);
            res.status(500)
        }
        else console.log(info)
    })
    res.status(200);
}
