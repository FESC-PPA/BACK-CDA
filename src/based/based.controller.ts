import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BasedService } from './based.service';
import { CreateBasedDto } from './dto/create-based.dto';
import { UpdateBasedDto } from './dto/update-based.dto';

@Controller('based')
export class BasedController {
  constructor(private readonly basedService: BasedService) {}

  @Post()
  create(@Body() createBasedDto: CreateBasedDto) {
    return this.basedService.create(createBasedDto);
  }

  @Get()
  findAll() {
    return this.basedService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.basedService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBasedDto: UpdateBasedDto) {
    return this.basedService.update(+id, updateBasedDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.basedService.remove(+id);
  }
}
