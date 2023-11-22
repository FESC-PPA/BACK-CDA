import { Injectable } from '@nestjs/common';
import { CreateWorkDayDto } from './dto/create-work-day.dto';
import { UpdateWorkDayDto } from './dto/update-work-day.dto';

@Injectable()
export class WorkDaysService {
  create(createWorkDayDto: CreateWorkDayDto) {
    return 'This action adds a new workDay';
  }

  findAll() {
    return `This action returns all workDays`;
  }

  findOne(id: number) {
    return `This action returns a #${id} workDay`;
  }

  update(id: number, updateWorkDayDto: UpdateWorkDayDto) {
    return `This action updates a #${id} workDay`;
  }

  remove(id: number) {
    return `This action removes a #${id} workDay`;
  }
}
