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
    console.log(req.body);
    return this.authService.signup(req.body);
  }

  @Post('signin')
  sigin() {
    return this.authService.login();
  }
}
