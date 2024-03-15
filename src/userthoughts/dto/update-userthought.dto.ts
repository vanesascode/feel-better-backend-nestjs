import { PartialType } from '@nestjs/mapped-types';
import { CreateUserThoughtDto } from './create-userthought.dto';

export class UpdateUserThoughtDto extends PartialType(CreateUserThoughtDto) {}
