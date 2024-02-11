import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get('uptime')
  uptime() {
    return process.uptime();
  }
}
