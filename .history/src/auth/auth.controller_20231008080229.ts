import { Controller, Post, Req, Body } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService.test();
  }

  @Post('signup')
  signup(@Body() dto: any) {
    // signup(@Req() req: Request) {
    console.log({
      dto,
    });
    return this.authService.signup();
  }

  @Post('signin')
  sigin() {
    return this.authService.login();
  }
}
