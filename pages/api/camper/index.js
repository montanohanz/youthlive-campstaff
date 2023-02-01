import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const { uuid } = req.query;
  const data = req.body;
  switch (req.method) {
  case 'GET':
    try {
      const result = await prisma.camper.findMany();
      res.status(200).json(result);
    } catch (err) {
      console.log(err);
      res.status(403).json({ err: "Error occured." });
    }
    break;
    
  case 'POST':
    const result = await prisma.camper.create({
      data: data
    });
    res.status(200).json(result);
    break;

  default:
    res.status(405).end(`${method} Not Allowed`);
    break;
  }
};