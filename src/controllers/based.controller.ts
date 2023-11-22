import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, Req } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { Request, Response } from 'express'
import { JwtAuthGuard } from 'src/jwt-auth.guard'
import { BasedService } from 'src/services'

@Controller('based')
export class BasedController {
  constructor(private readonly basedService: BasedService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req: Request, @Body() createBasedDto: Prisma.basedCreateManyInput) {
    const user: Prisma.UserMinAggregateOutputType = { ...req.user } as Prisma.UserMinAggregateOutputType
    createBasedDto.organizationId = user.organizationId
    return await this.basedService.create(createBasedDto)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: Request) {
    const user: Prisma.UserMinAggregateOutputType = { ...req.user } as Prisma.UserMinAggregateOutputType
    const organizationId = user.organizationId
    return await this.basedService.findAll(organizationId)
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.basedService.findOne(+id)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateBasedDto: Prisma.basedUpdateInput) {
    return await this.basedService.update(+id, updateBasedDto)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.basedService.remove(+id)
  }
}
