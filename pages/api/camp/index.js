const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function handler(req, res) {
    var data = await prisma.camp.findMany();
    res.status(200);
    res.send(data);
}

// .post(async function (req, res, next) {
//     res.status(200);
//     const result = await prisma.camp.create({
//         data: req.body
//     });
//     res.send(result);
//   })
// .put(function (req, res ,next ) {
//     res.status(405);
//     next(new Error('Not Implemented'))
// })
// .delete(function (req, res ,next ) {
//     res.status(405);
//     next(new Error('Not Implemented'))
// })