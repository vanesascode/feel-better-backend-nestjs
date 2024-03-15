import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateUserThoughtDto } from './dto/create-userthought.dto';
import { UpdateUserThoughtDto } from './dto/update-userthought.dto';
import { UserThought, UserThoughtDocument } from './schema/userthought.schema';
import { User, UserDocument } from 'src/users/schema/user.schema';

@Injectable()
export class UserThoughtService {
  constructor(
    @InjectModel(UserThought.name)
    private userThoughtModel: Model<UserThoughtDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserThoughtDto: CreateUserThoughtDto) {
    const userThoughtCreated =
      await this.userThoughtModel.create(createUserThoughtDto);
    return userThoughtCreated;
  }

  async findAll() {
    const list = await this.userThoughtModel.find();
    return list;
  }

  async findAllByUser(user: string) {
    const list = await this.userThoughtModel.find({ user });
    return list;
  }

  async findAllByUserAndFeeling(user: string, feeling: string) {
    const list = await this.userThoughtModel.find({ user, feeling });
    return list;
  }

  async update(id: string, updateUserThoughtDto: UpdateUserThoughtDto) {
    const userThoughtUpdated = await this.userThoughtModel
      .findByIdAndUpdate(id, updateUserThoughtDto)
      .lean(); //lean disables caching
    return userThoughtUpdated;
  }

  async remove(id: string) {
    const userThoughtRemoved =
      await this.userThoughtModel.findByIdAndDelete(id);
    return userThoughtRemoved;
  }
}
