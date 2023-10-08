import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';

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
