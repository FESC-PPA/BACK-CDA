import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WorkDaysService } from './work-days.service';
import { CreateWorkDayDto } from './dto/create-work-day.dto';
import { UpdateWorkDayDto } from './dto/update-work-day.dto';

@Controller('work-days')
export class WorkDaysController {
  constructor(private readonly workDaysService: WorkDaysService) {}

  @Post()
  create(@Body() createWorkDayDto: CreateWorkDayDto) {
    return this.workDaysService.create(createWorkDayDto);
  }

  @Get()
  findAll() {
    return this.workDaysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workDaysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDayDto: UpdateWorkDayDto) {
    return this.workDaysService.update(+id, updateWorkDayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workDaysService.remove(+id);
  }
}
