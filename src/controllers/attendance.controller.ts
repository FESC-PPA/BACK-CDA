import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { AttendanceService } from 'src/services'

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) { }

  @Post()
  create(@Body() createAttendanceDto: Prisma.attendanceCreateManyInput) {
    return this.attendanceService.create(createAttendanceDto)
  }

  @Get()
  findAll() {
    return this.attendanceService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.attendanceService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAttendanceDto: Prisma.attendanceUpdateInput) {
    return this.attendanceService.update(+id, updateAttendanceDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.attendanceService.remove(+id)
  }
}
