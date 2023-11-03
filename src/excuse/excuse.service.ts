import { Injectable } from '@nestjs/common';
import { CreateExcuseDto } from './dto/create-excuse.dto';
import { UpdateExcuseDto } from './dto/update-excuse.dto';

@Injectable()
export class ExcuseService {
  create(createExcuseDto: CreateExcuseDto) {
    return 'This action adds a new excuse';
  }

  findAll() {
    return `This action returns all excuse`;
  }

  findOne(id: number) {
    return `This action returns a #${id} excuse`;
  }

  update(id: number, updateExcuseDto: UpdateExcuseDto) {
    return `This action updates a #${id} excuse`;
  }

  remove(id: number) {
    return `This action removes a #${id} excuse`;
  }
}
