import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    return 'Hello World';
  }

  login() {}
  signup() {}
}
