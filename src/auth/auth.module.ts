import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
// import { jwtConstant } from './constants/jwt.constants';
import { JwtStrategy } from './strategies/jwt.strategy';
import { jwtConfig } from './config/jwt.config';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    JwtModule.registerAsync(jwtConfig),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
