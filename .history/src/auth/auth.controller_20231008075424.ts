import { Controller, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {
    this.authService.test();
  }

  @Post('signup')
  signup(@Req() req: Request) {
    return this.authService.signup();
  }

  @Post('signin')
  sigin() {
    return this.authService.login();
  }
}
