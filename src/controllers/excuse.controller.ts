import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ExcuseService } from 'src/services'

@Controller('excuse')
export class ExcuseController {
  constructor(private readonly excuseService: ExcuseService) { }

  @Post()
  create(@Body() createExcuseDto: Prisma.excuseCreateManyInput) {
    return this.excuseService.create(createExcuseDto)
  }

  @Get()
  findAll() {
    return this.excuseService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.excuseService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateExcuseDto: Prisma.excuseUpdateInput) {
    return this.excuseService.update(+id, updateExcuseDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.excuseService.remove(+id)
  }
}
