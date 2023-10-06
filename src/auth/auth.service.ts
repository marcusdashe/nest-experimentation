import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  test() {
    return 'Hello World';
  }

  login() {
    return { msg: 'SignIn Successfully' };
  }
  signup() {
    return { msg: 'SignUp Successfully' };
  }
}
