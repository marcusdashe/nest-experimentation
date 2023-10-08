import { Injectable } from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon from 'argon2';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  test() {
    return 'Hello   World';
  }

  async signup(dto: AuthDto) {
    // generate the password hash
    const hash = argon.hash(dto.password)
    // save the new user in the db
    const user = await
    // return the saved user
    return { msg: 'SignUp Successfully' };
  }

  login() {
    return { msg: 'SignIn Successfully' };
  }
}
