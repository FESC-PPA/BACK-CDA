import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { FacialDataService } from 'src/services'

@Controller('facial-data')
export class FacialDataController {
  constructor(private readonly facialDataService: FacialDataService) { }

  @Post()
  create(@Body() createFacialDatumDto: Prisma.facialDataCreateManyInput) {
    return this.facialDataService.create(createFacialDatumDto)
  }

  @Get()
  findAll() {
    return this.facialDataService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.facialDataService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFacialDatumDto: Prisma.facialDataUpdateInput) {
    return this.facialDataService.update(+id, updateFacialDatumDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.facialDataService.remove(+id)
  }
}
