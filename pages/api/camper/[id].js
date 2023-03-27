require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const transporter = nodemailer.createTransport(options[, defaults]);

export default async function handler(req,res) {
    const {id} = req.query
    console.log(req.query.send)
    if (req.method === 'GET') {
        var data = await prisma.camper.findUnique({
            where: {id: `${id}`}
        })
        if (req.query.send == 'true') {
            console.log("send");
        }
        res.status(200);
        res.send(data);
    }
    if (req.method === 'POST') {
        var data = await prisma.camper.update({
            where: {id: `${id}`},
            data: req.body,
        })
        res.status(200);
        res.send(data);
    }


}