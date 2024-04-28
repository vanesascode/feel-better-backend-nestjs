import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

import { ApiTags } from '@nestjs/swagger';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
import { GoogleAuthDto } from './dto/google-auth.dto';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObject: RegisterAuthDto) {
    return this.authService.register(userObject);
  }

  @Post('google-register')
  registerGoogleUser(@Body() userObject: GoogleAuthDto) {
    return this.authService.googleRegister(userObject);
  }

  @Post('login')
  loginUser(@Body() userObject: LoginAuthDto) {
    return this.authService.login(userObject);
  }

  @Post('google-login')
  loginGoogleUser(@Body() userObject: GoogleAuthDto) {
    return this.authService.googleLogin(userObject);
  }
}
