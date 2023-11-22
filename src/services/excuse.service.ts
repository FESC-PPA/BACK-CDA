import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class ExcuseService {
  create(createExcuseDto: Prisma.excuseCreateManyInput) {
    return 'This action adds a new excuse'
  }

  findAll() {
    return `This action returns all excuse`
  }

  findOne(id: number) {
    return `This action returns a #${id} excuse`
  }

  update(id: number, updateExcuseDto: Prisma.excuseUpdateInput) {
    return `This action updates a #${id} excuse`
  }

  remove(id: number) {
    return `This action removes a #${id} excuse`
  }
}
