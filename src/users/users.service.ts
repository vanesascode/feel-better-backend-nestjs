import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/user.schema';
import { hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private usersModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const userCreated = await this.usersModel.create(createUserDto);
    return userCreated;
  }

  async findAll() {
    const users = await this.usersModel.find();
    return users;
  }

  async findOne(id: string) {
    const user = await this.usersModel.findById(id);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const { password, ...restUpdateUserDto } = updateUserDto;
    const updatedUserDto = password
      ? { ...restUpdateUserDto, password: await hash(password, 10) }
      : restUpdateUserDto;
    const user = await this.usersModel.findByIdAndUpdate(id, updatedUserDto);
    return user;
  }

  async resetPassword(email: string, password: string) {
    const encryptedPassword = await hash(password, 10);
    const user = await this.usersModel.findOneAndUpdate(
      { email: email },
      { password: encryptedPassword },
    );
    return user;
  }

  async remove(id: string) {
    const user = await this.usersModel.findByIdAndDelete(id);
    return user;
  }
}
