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
  signup(@Body() payload: AuthRegDto) {
    // console.log({
    //   email,
    //   password,
    // });
    return this.authService.signup(payload);
  }

  @Post('signin')
  sigin(@Body() dto: AuthDto) {
    return this.authService.login(dto);
  }
}
