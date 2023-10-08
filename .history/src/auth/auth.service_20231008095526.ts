import {
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { User, Bookmark } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto, AuthRegDto } from './dto';
import * as argon from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  test() {
    return 'Hello   World';
  }

  async signup(payload: AuthRegDto) {
    // generate the password hash
    const hash = await argon.hash(
      payload.password,
    );
    // save the new user in the db

    try {
      const user = await this.prisma.user.create({
        data: {
          email: payload.email,
          hash,
          firstName: payload,
        },

        // select: {
        //   id: true,
        //   email: true,
        //   createdAt: true,
        // },
      });
      delete user.hash;
      // return the saved user
      return user;
    } catch (error) {
      if (
        error instanceof
        PrismaClientKnownRequestError
      ) {
        if (error.code === 'P2002') {
          throw new ForbiddenException(
            'Credential Taken',
          );
        }
      }
    }
  }

  async login(dto: AuthDto) {
    //  Finds the user by email
    const user =
      await this.prisma.user.findUnique({
        where: {
          email: dto.email,
        },
      });
    // if user does not exist throw exception
    if (!user)
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    // compare password
    const pwMatches = await argon.verify(
      user.hash,
      dto.password,
    );

    // if password incorrect throw wexception
    if (!pwMatches)
      throw new ForbiddenException(
        'Credentials incorrect',
      );
    // send back the user
    delete user.hash;
    return user;
  }
}
