import { Injectable } from '@nestjs/common';
import { CreateBasedDto } from './dto/create-based.dto';
import { UpdateBasedDto } from './dto/update-based.dto';

@Injectable()
export class BasedService {
  create(createBasedDto: CreateBasedDto) {
    return 'This action adds a new based';
  }

  findAll() {
    return `This action returns all based`;
  }

  findOne(id: number) {
    return `This action returns a #${id} based`;
  }

  update(id: number, updateBasedDto: UpdateBasedDto) {
    return `This action updates a #${id} based`;
  }

  remove(id: number) {
    return `This action removes a #${id} based`;
  }
}
