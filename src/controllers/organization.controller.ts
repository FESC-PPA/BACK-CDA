import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { OrganizationService } from 'src/services'

@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) { }

  @Post()
  create(@Body() createOrganizationDto: Prisma.organizationCreateManyInput) {
    return this.organizationService.create(createOrganizationDto)
  }

  @Get()
  findAll() {
    return this.organizationService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.organizationService.findOne(+id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOrganizationDto: Prisma.organizationUpdateInput) {
    return this.organizationService.update(+id, updateOrganizationDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.organizationService.remove(+id)
  }
}
