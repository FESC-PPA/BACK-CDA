import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class UserScheduleService {
  create(createUserScheduleDto: Prisma.usersCheduleCreateManyInput) {
    return 'This action adds a new userSchedule'
  }

  findAll() {
    return `This action returns all userSchedule`
  }

  findOne(id: number) {
    return `This action returns a #${id} userSchedule`
  }

  update(id: number, updateUserScheduleDto: Prisma.usersCheduleUpdateInput) {
    return `This action updates a #${id} userSchedule`
  }

  remove(id: number) {
    return `This action removes a #${id} userSchedule`
  }
}
