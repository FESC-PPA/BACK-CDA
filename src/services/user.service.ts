import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'
import { PrismaService } from './prisma.service'

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService, private jwtService: JwtService,) {

  }
  create(createUserDto: Prisma.userCreateManyInput) {
    return 'This action adds a new user'
  }

  findAll() {
    return `This action returns all user`
  }

  async findOne(id: number) {
    let existingUser: Prisma.UserMinAggregateOutputType = await this.prismaService.user.findFirst({
      where: {
        OR: [
          { userId: id }
        ],
      },
    })
    return existingUser
  }

  update(id: number, updateUserDto: Prisma.userUpdateInput) {
    return `This action updates a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
