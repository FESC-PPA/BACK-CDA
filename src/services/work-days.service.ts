import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class WorkDaysService {
  create(createWorkDayDto: Prisma.workDaysCreateManyInput) {
    return 'This action adds a new workDay'
  }

  findAll() {
    return `This action returns all workDays`
  }

  findOne(id: number) {
    return `This action returns a #${id} workDay`
  }

  update(id: number, updateWorkDayDto: Prisma.workDaysUpdateInput) {
    return `This action updates a #${id} workDay`
  }

  remove(id: number) {
    return `This action removes a #${id} workDay`
  }
}
