import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { WeekDaysService } from 'src/services'

@Controller('week-days')
export class WeekDaysController {
  constructor(private readonly weekDaysService: WeekDaysService) { }

  @Post()
  create(@Body() createWeekDayDto: Prisma.weekDaysCreateManyInput) {
    return this.weekDaysService.create(createWeekDayDto)
  }

  @Get()
  async findAll() {
    return await this.weekDaysService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.weekDaysService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWeekDayDto: Prisma.weekDaysUpdateInput) {
    return this.weekDaysService.update(+id, updateWeekDayDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.weekDaysService.remove(+id)
  }
}
