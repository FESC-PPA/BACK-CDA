import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class OrganizationService {
  create(createOrganizationDto: Prisma.organizationCreateManyInput) {
    return 'This action adds a new organization'
  }

  findAll() {
    return `This action returns all organization`
  }

  findOne(id: number) {
    return `This action returns a #${id} organization`
  }

  update(id: number, updateOrganizationDto: Prisma.organizationUpdateInput) {
    return `This action updates a #${id} organization`
  }

  remove(id: number) {
    return `This action removes a #${id} organization`
  }
}
