import { HttpStatus, Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ScheduleService {
  constructor(private prismaService: PrismaService) { }

  async create(createScheduleDto: Prisma.scheduleUncheckedCreateInput) {
    try {
      ///as Prisma.workDaysCre ateManyScheduleInput[]
      const w = Array.isArray(createScheduleDto.workDays) ? [...createScheduleDto.workDays] : [createScheduleDto.workDays]
      const modifiedArray: Prisma.workDaysCreateManyScheduleInput[] = w.map((item) => {
        const { weekDays, ...rest } = item;
        return rest;
      })

      const schedule = await this.prismaService.schedule.create({
        data: {
          name: createScheduleDto.name,
          basedBasedId: createScheduleDto.basedBasedId,
          workDays: {
            createMany: {
              data: modifiedArray,
            },
          }
        },
        include: {
          workDays: {
            include: {
              weekDays: true
            }
          },
          usersChedule: {
            include: {
              attendance: {
                include: {
                  excuse: true
                }
              }
            }
          }
        }
      })
      if (schedule) {
        return {
          status: HttpStatus.OK,
          data: schedule
        };
      } else {
        return {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          data: {
            message: "Inténtelo de nuevo más tarde"
          }
        };
      }
    } catch (err) {
      console.error('Error:', err);
      // Maneja el error según sea necesario
      throw err;
    } finally {
      // Cierra la conexión de Prisma
      await this.prismaService.$disconnect();
    }
  }

  findAll() {
    return `This action returns all schedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} schedule`;
  }

  update(id: number, updateScheduleDto: UpdateScheduleDto) {
    return `This action updates a #${id} schedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} schedule`;
  }
}
