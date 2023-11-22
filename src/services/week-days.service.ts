import { HttpStatus, Injectable } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { Prisma } from '@prisma/client'

@Injectable()
export class WeekDaysService {
  constructor(private prismaService: PrismaService) { }
  create(createWeekDayDto: Prisma.weekDaysCreateManyInput) {
    return 'This action adds a new weekDay'
  }

  async findAll() {
    try {
      const weekDays = await this.prismaService.weekDays.findMany()
      if (weekDays) {
        return {
          status: HttpStatus.OK,
          data: weekDays
        };
      } else {
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          data: {
            message: "Inténtelo de nuevo más tarde"
          }
        };
      }
    } catch (error) {
      // Maneja el error según sea necesario
      throw error;
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} weekDay`
  }

  update(id: number, updateWeekDayDto: Prisma.weekDaysUpdateInput) {
    return `This action updates a #${id} weekDay`
  }

  remove(id: number) {
    return `This action removes a #${id} weekDay`
  }
}
