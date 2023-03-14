const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function hander(req, res) {
    var data = await prisma.camper.findMany();
    res.status(200);
    res.send(data);
}