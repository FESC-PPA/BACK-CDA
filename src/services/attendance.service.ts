import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class AttendanceService {
  create(createAttendanceDto: Prisma.attendanceCreateManyInput) {
    return 'This action adds a new attendance'
  }

  findAll() {
    return `This action returns all attendance`
  }

  findOne(id: number) {
    return `This action returns a #${id} attendance`
  }

  update(id: number, updateAttendanceDto: Prisma.attendanceUpdateInput) {
    return `This action updates a #${id} attendance`
  }

  remove(id: number) {
    return `This action removes a #${id} attendance`
  }
}
