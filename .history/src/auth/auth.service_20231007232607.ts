import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  test() {
    return 'Hello   World';
  }

  login() {
    return { msg: 'SignIn Successfully' };
  }
  signup() {
    return { msg: 'SignUp Successfully' };
  }
}
