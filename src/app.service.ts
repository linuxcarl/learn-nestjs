import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  public getDescriptionProject(): string{
    return 'My first project with nestJS '; 
  }
}
