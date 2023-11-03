import { Injectable } from '@nestjs/common';
import { CreateFacialDatumDto } from './dto/create-facial-datum.dto';
import { UpdateFacialDatumDto } from './dto/update-facial-datum.dto';

@Injectable()
export class FacialDataService {
  create(createFacialDatumDto: CreateFacialDatumDto) {
    return 'This action adds a new facialDatum';
  }

  findAll() {
    return `This action returns all facialData`;
  }

  findOne(id: number) {
    return `This action returns a #${id} facialDatum`;
  }

  update(id: number, updateFacialDatumDto: UpdateFacialDatumDto) {
    return `This action updates a #${id} facialDatum`;
  }

  remove(id: number) {
    return `This action removes a #${id} facialDatum`;
  }
}
