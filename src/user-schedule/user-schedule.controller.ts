import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserScheduleService } from './user-schedule.service';
import { CreateUserScheduleDto } from './dto/create-user-schedule.dto';
import { UpdateUserScheduleDto } from './dto/update-user-schedule.dto';

@Controller('user-schedule')
export class UserScheduleController {
  constructor(private readonly userScheduleService: UserScheduleService) {}

  @Post()
  create(@Body() createUserScheduleDto: CreateUserScheduleDto) {
    return this.userScheduleService.create(createUserScheduleDto);
  }

  @Get()
  findAll() {
    return this.userScheduleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userScheduleService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserScheduleDto: UpdateUserScheduleDto) {
    return this.userScheduleService.update(+id, updateUserScheduleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userScheduleService.remove(+id);
  }
}
