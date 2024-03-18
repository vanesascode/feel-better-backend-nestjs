import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { UserThoughtService } from './userthought.service';
import { CreateUserThoughtDto } from './dto/create-userthought.dto';
import { UpdateUserThoughtDto } from './dto/update-userthought.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth-guard';

@ApiBearerAuth()
@ApiTags('Userthoughts')
@UseGuards(JwtAuthGuard)
@Controller('userthoughts')
export class UserThoughtController {
  constructor(private readonly userThoughtService: UserThoughtService) {}

  @Post()
  create(@Body() createUserThoughtDto: CreateUserThoughtDto) {
    return this.userThoughtService.create(createUserThoughtDto);
  }

  @Get()
  findAll() {
    return this.userThoughtService.findAll();
  }

  @Get(':user')
  findAllByUser(@Param('user') user: string) {
    return this.userThoughtService.findAllByUser(user);
  }

  @Get(':user/:feeling')
  findAllByUserAndFeeling(
    @Param('user') user: string,
    @Param('feeling') feeling: string,
  ) {
    // Use both user and feeling parameters to fetch data
    return this.userThoughtService.findAllByUserAndFeeling(user, feeling);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserThoughtDto: UpdateUserThoughtDto,
  ) {
    return this.userThoughtService.update(id, updateUserThoughtDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userThoughtService.remove(id);
  }
}
