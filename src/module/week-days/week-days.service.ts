import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateWeekDayDto } from './dto/create-week-day.dto';
import { UpdateWeekDayDto } from './dto/update-week-day.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class WeekDaysService {
  constructor(private prismaService: PrismaService) { }
  create(createWeekDayDto: CreateWeekDayDto) {
    return 'This action adds a new weekDay';
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
    return `This action returns a #${id} weekDay`;
  }

  update(id: number, updateWeekDayDto: UpdateWeekDayDto) {
    return `This action updates a #${id} weekDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} weekDay`;
  }
}
