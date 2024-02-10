import { Injectable, NestMiddleware } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class TerminalApikeyMiddleware implements NestMiddleware {
  prisma = new PrismaClient();
  use(req: any, res: any, next: () => void) {
    const apiKey = req.query.apiKey;
    this.prisma.terminal
      .findFirst({ where: { apiKey: apiKey } })
      .then((terminal) => {
        if (terminal === undefined || apiKey !== terminal.apiKey) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
        req.terminalName = terminal.name;
        next();
      })
      .catch((err) => res.status(401).json({ message: 'Unauthorized' }));
  }
}
