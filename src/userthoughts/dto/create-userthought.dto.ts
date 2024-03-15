import { IsNotEmpty } from 'class-validator';

export class CreateUserThoughtDto {
  @IsNotEmpty()
  user: string;

  @IsNotEmpty()
  negativeThought: string;

  @IsNotEmpty()
  positiveThought: string;

  @IsNotEmpty()
  feeling: string;
}
