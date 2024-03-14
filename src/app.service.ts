import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    @Inject('API_KEY') private api: string,
    @Inject('TASKS') private tasks: string,
  ) {}
  getHello(): string {
    console.log(this.tasks);
    return `Hello World! ${this.api}`;
  }
}
