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
  create(@Req() req: Request, @Body() createBasedDto: Prisma.basedCreateManyInput) {
    //createBasedDto.organizationId = req.user
    return this.basedService.create(createBasedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: Request) {
    console.log(req.user);
    return this.basedService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.basedService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBasedDto: UpdateBasedDto) {
    return this.basedService.update(+id, updateBasedDto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.basedService.remove(+id);
  }
}
