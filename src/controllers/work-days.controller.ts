import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { WorkDaysService } from 'src/services'

@Controller('work-days')
export class WorkDaysController {
  constructor(private readonly workDaysService: WorkDaysService) { }

  @Post()
  create(@Body() createWorkDayDto: Prisma.workDaysCreateManyInput) {
    return this.workDaysService.create(createWorkDayDto)
  }

  @Get()
  findAll() {
    return this.workDaysService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workDaysService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDayDto: Prisma.workDaysUpdateInput) {
    return this.workDaysService.update(+id, updateWorkDayDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workDaysService.remove(+id)
  }
}
