import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      Error: 0,
      Message: 'Welcome home'
    };
  }
}
