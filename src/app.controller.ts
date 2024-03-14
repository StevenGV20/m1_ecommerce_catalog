import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return 'Hola'; //this.appService.getHello();
  }
  @Get('thenew')
  newEndpoint() {
    return "I'm the new";
  }
  @Get('/ruta/')
  hello() {
    return 'con /sas/';
  }


}
