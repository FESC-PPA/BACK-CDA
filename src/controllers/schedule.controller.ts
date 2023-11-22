import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { ScheduleService } from 'src/services'

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) { }

  @Post()
  async create(@Body() createScheduleDto: Prisma.scheduleUncheckedCreateInput) {
    return await this.scheduleService.create(createScheduleDto)
  }

  @Get()
  findAll() {
    return this.scheduleService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.scheduleService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateScheduleDto: Prisma.scheduleUpdateInput) {
    return this.scheduleService.update(+id, updateScheduleDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.scheduleService.remove(+id)
  }
}
