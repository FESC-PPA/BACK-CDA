import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { UserScheduleService } from 'src/services'

@Controller('user-schedule')
export class UserScheduleController {
  constructor(private readonly userScheduleService: UserScheduleService) { }

  @Post()
  create(@Body() createUserScheduleDto: Prisma.usersCheduleCreateManyInput) {
    return this.userScheduleService.create(createUserScheduleDto)
  }

  @Get()
  findAll() {
    return this.userScheduleService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userScheduleService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserScheduleDto: Prisma.usersCheduleUpdateInput) {
    return this.userScheduleService.update(+id, updateUserScheduleDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userScheduleService.remove(+id)
  }
}
