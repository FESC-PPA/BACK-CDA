import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class FacialDataService {
  create(createFacialDatumDto: Prisma.facialDataCreateManyInput) {
    return 'This action adds a new facialDatum'
  }

  findAll() {
    return `This action returns all facialData`
  }

  findOne(id: number) {
    return `This action returns a #${id} facialDatum`
  }

  update(id: number, updateFacialDatumDto: Prisma.facialDataUpdateInput) {
    return `This action updates a #${id} facialDatum`
  }

  remove(id: number) {
    return `This action removes a #${id} facialDatum`
  }
}
