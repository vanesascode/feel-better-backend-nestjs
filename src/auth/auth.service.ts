import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schema/user.schema';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { hash, compare } from 'bcrypt';
import { LoginAuthDto } from './dto/login-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private jwtAuthService: JwtService,
  ) {}

  async register(userObject: RegisterAuthDto) {
    const { password } = userObject;
    const plainToHash = await hash(password, 10);
    userObject = { ...userObject, password: plainToHash };
    const newUser = await this.userModel.create(userObject);

    const payload = { id: newUser._id, name: newUser.name };
    const token = this.jwtAuthService.sign(payload, { expiresIn: '7d' });

    const data = { user: newUser, token };

    return data;
  }

  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    const findUser = await this.userModel.findOne({
      email,
    });
    if (!findUser)
      throw new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);
    const checkPassword = await compare(password, findUser.password);

    if (!checkPassword)
      throw new HttpException('PASSWORD_INVALID', HttpStatus.UNAUTHORIZED);

    const payload = { id: findUser._id, name: findUser.name };
    const token = this.jwtAuthService.sign(payload, { expiresIn: '7d' });

    const data = { user: findUser, token };

    return data;
  }
}
