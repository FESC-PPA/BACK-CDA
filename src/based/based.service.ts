import { Injectable, HttpStatus } from '@nestjs/common';
import { UpdateBasedDto } from './dto/update-based.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BasedService {
  constructor(private prismaService: PrismaService) { }
  async create(createBasedDto) {

    try {
      const based = await this.prismaService.based.create({
        data: {
          ...createBasedDto
        },
        include: {
          organization: true
        }
      })

      if (based) {
        return {
          status: HttpStatus.CREATED,
          data: based
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
      console.error('Error:', error);
      // Maneja el error según sea necesario
      throw error;
    } finally {
      // Cierra la conexión de Prisma
      await this.prismaService.$disconnect();
    }
  }


  async findAll(organizationId: number) {
    try {
      const baseds = await this.prismaService.based.findMany({
        where: {
          organizationId
        }
      })
      if (baseds) {
        return {
          status: HttpStatus.OK,
          data: Array.isArray(baseds) ? baseds : [baseds]
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
      console.error('Error:', error);
      // Maneja el error según sea necesario
      throw error;
    } finally {
      // Cierra la conexión de Prisma
      await this.prismaService.$disconnect();
    }

  }

  async findOne(basedId: number) {
    try {
      const hoy = new Date()
      hoy.setHours(0, 0, 0, 0) // Resetear hora a 00:00

      const mañana = new Date(hoy)
      mañana.setDate(hoy.getDate() + 1)

      const baseds = await this.prismaService.based.findUnique({
        where: {
          basedId
        },
        include: {
          schedule: {
            include: {
              workDays: {
                include: {
                  weekDays: true
                }
              },
              usersChedule: {
                include: {
                  attendance: {
                    where: {
                      date: {
                        gte: hoy,
                        lt: new Date(hoy.setDate(hoy.getDate() + 1))
                      }
                    },
                    include: {
                      excuse: true
                    }
                  }
                }
              }
            }
          }
        }

      })
      if (baseds) {
        console.log(basedId)
        return {
          status: HttpStatus.OK,
          data: baseds
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
      console.error('Error:', error);
      // Maneja el error según sea necesario
      throw error;
    } finally {
      // Cierra la conexión de Prisma
      await this.prismaService.$disconnect();
    }
  }

  async update(basedId: number, updateBasedDto: Prisma.basedUpdateInput) {
    try {
      const based = await this.prismaService.based.update({
        where: {
          basedId
        },
        data: {
          ...updateBasedDto
        }
      })
      if (based) {
        return {
          status: HttpStatus.OK,
          data: based
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
      throw error;
    } finally {
      // Cierra la conexión de Prisma
      await this.prismaService.$disconnect();
    }
  }

  async remove(basedId: number) {
    try {
      const based = await this.prismaService.based.delete({
        where: {
          basedId
        }
      })
      if (based) {
        return {
          status: HttpStatus.OK,
          data: based
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
      console.error('Error:', error);
      // Maneja el error según sea necesario
      throw error;
    } finally {
      // Cierra la conexión de Prisma
      await this.prismaService.$disconnect();
    }
  }
}
