import { Injectable, HttpStatus } from '@nestjs/common';
import { UpdateBasedDto } from './dto/update-based.dto';
import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class BasedService {
  constructor(private prismaService: PrismaService) {

  }
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

  findOne(basedId: number) {
    return `This action returns a #${basedId} based`;
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
