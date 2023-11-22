import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FacialDataService } from './facial-data.service';
import { CreateFacialDatumDto } from './dto/create-facial-datum.dto';
import { UpdateFacialDatumDto } from './dto/update-facial-datum.dto';

@Controller('facial-data')
export class FacialDataController {
  constructor(private readonly facialDataService: FacialDataService) {}

  @Post()
  create(@Body() createFacialDatumDto: CreateFacialDatumDto) {
    return this.facialDataService.create(createFacialDatumDto);
  }

  @Get()
  findAll() {
    return this.facialDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facialDataService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacialDatumDto: UpdateFacialDatumDto) {
    return this.facialDataService.update(+id, updateFacialDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facialDataService.remove(+id);
  }
}
