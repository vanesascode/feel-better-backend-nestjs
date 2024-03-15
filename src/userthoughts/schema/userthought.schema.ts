import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from 'src/users/schema/user.schema';

export type UserThoughtDocument = HydratedDocument<UserThought>;

@Schema()
export class UserThought {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ required: true })
  negativeThought: string;

  @Prop({ required: true })
  positiveThought: string;

  @Prop({ required: true })
  feeling: string;

  @Prop({ required: true, default: Date.now })
  createdAt: Date;
}

export const UserThoughtSchema = SchemaFactory.createForClass(UserThought);
