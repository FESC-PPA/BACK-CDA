import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ExcuseService } from './excuse.service';
import { CreateExcuseDto } from './dto/create-excuse.dto';
import { UpdateExcuseDto } from './dto/update-excuse.dto';

@Controller('excuse')
export class ExcuseController {
  constructor(private readonly excuseService: ExcuseService) {}

  @Post()
  create(@Body() createExcuseDto: CreateExcuseDto) {
    return this.excuseService.create(createExcuseDto);
  }

  @Get()
  findAll() {
    return this.excuseService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excuseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExcuseDto: UpdateExcuseDto) {
    return this.excuseService.update(+id, updateExcuseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excuseService.remove(+id);
  }
}
