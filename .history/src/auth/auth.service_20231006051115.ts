import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    return 'Hello World';
  }

  login() {
    return { msg: 'SignUp Successfully' };
  }
  signup() {
    return { msg: 'SignIn Successfully' };
  }
}
