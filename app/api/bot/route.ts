
import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { action, userId, username, points } = req.body;

      switch (action) {
        case 'createUser':
          const user = await prisma.user.create({
            data: {
              telegramId: userId,
              username: username,
              points: 0,
              accountCreatedAt: new Date(),
            },
          });
          res.status(200).json(user);
          break;

        case 'updatePoints':
          const updatedUser = await prisma.user.update({
            where: { telegramId: userId },
            data: { points: { increment: points } },
          });
          res.status(200).json(updatedUser);
          break;

        case 'getLeaderboard':
          const leaderboard = await prisma.user.findMany({
            orderBy: { points: 'desc' },
            take: 10,
          });
          res.status(200).json(leaderboard);
          break;

        default:
          res.status(400).json({ error: 'Invalid action' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
