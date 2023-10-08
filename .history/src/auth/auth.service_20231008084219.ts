import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  test() {
    return 'Hello   World';
  }

  login() {
    return { msg: 'SignIn Successfully' };
  }
  signup(dto: AuthDto) {
    return { msg: 'SignUp Successfully' };
  }
}
