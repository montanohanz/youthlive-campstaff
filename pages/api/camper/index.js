const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export default async function hander(req, res) {
    if (req.method === 'GET') {
        var data = await prisma.camper.findMany();
        res.status(200);
        res.send(data);
    }
    if (req.method === 'POST') {
        // commit entry
        var data = await prisma.camper.create({ data: req.body });
        res.status(200);
        res.send(data);
    }
}

// sample post request body
// {
//     "pco_id": null,
//     "email": "montanohanz@gmail.com",
//     "contact": "09657012238",
//     "name_first": "test2",
//     "name_last": "dunkindonut",
//     "bday": "2023-03-14T16:25:54.238Z",
//     "em_name": "crisha",
//     "em_contact": "09124888592",
//     "em_relation": "aunt",
//     "allergies": "drama",
//     "paid": false,
//     "paid_channel": "",
//     "paid_refno": null,
//     "paid_DateTime": "2023-03-14T16:25:54.238Z",
//     "ygroup": "josh",
//     "bus": "1",
//     "act_team": "2",
//     "sponsor": null,
//     "first_date": "2023-03-14T16:25:54.238Z"
//   }