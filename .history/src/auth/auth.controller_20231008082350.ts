import {
  Controller,
  Post,
  Req,
  Body,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService.test();
  }

  @Post('signup')
  // signup(
  //   @Body('email') email: string,
  //   @Body('password', ParseIntPipe) password: string
  // )

  // signup(@Req() req: Request) {
  signup(@Body() dto: AuthDto) {
    // console.log({
    //   email,
    //   password,
    // });
    return this.authService.signup();
  }

  @Post('signin')
  sigin() {
    return this.authService.login();
  }
}
