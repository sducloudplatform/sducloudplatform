import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(name:string): string {
    return name;
  }

  getGoodbye():string{
    return 'Goodbye!';
  }
}
