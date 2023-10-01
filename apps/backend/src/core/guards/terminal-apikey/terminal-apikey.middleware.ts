import { EntityManager } from '@mikro-orm/mysql';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Terminal } from './../../../modules/terminal/entities/terminal.entity';

@Injectable()
export class TerminalApikeyMiddleware implements NestMiddleware {
  constructor(private em: EntityManager) {}
  use(req: any, res: any, next: () => void) {
    const apiKey = req.query.apiKey;
    this.em
      .findOne(Terminal, { apiKey: apiKey }, { fields: ['name', 'apiKey'] })
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
