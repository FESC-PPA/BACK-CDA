import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, Req } from '@nestjs/common';
import { BasedService } from './based.service';
import { CreateBasedDto } from './dto/create-based.dto';
import { UpdateBasedDto } from './dto/update-based.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { Prisma } from '@prisma/client';
import { Request, Response } from 'express';

@Controller('based')
export class BasedController {
  constructor(private readonly basedService: BasedService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Req() req: Request, @Body() createBasedDto: Prisma.basedCreateManyInput) {
    const user: Prisma.UserMinAggregateOutputType = { ...req.user } as Prisma.UserMinAggregateOutputType
    createBasedDto.organizationId = user.organizationId
    return await this.basedService.create(createBasedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Req() req: Request) {
    const user: Prisma.UserMinAggregateOutputType = { ...req.user } as Prisma.UserMinAggregateOutputType
    const organizationId = user.organizationId
    return await this.basedService.findAll(organizationId);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.basedService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateBasedDto: UpdateBasedDto) {
    return await this.basedService.update(+id, updateBasedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.basedService.remove(+id);
  }
}
