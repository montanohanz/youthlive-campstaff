import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  const { email } = req.query;
  const data = req.body;

  switch (req.method){
    case 'GET':
      try {
        const result = await prisma.camper.findUnique({
          where: {
            email: `${email}`,
          }
        });
        res.status(200).json(result);
      } catch (err) {
        console.log(err);
        res.status(403).json({ err: "Error occured." });
      }
      break;
    case 'POST':
      break;
    default:
      res.status(405).end(`${method} Not Allowed`);
      break;
  }
};