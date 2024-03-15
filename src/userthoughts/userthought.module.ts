import { Module } from '@nestjs/common';
import { UserThoughtService } from './userthought.service';
import { UserThoughtController } from './userthought.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserThought, UserThoughtSchema } from './schema/userthought.schema';
import { User, UserSchema } from 'src/users/schema/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserThought.name, schema: UserThoughtSchema },
      { name: User.name, schema: UserSchema },
    ]),
  ],
  controllers: [UserThoughtController],
  providers: [UserThoughtService],
})
export class UserThoughtModule {}
