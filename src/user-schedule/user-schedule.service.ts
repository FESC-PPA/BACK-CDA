import { Injectable } from '@nestjs/common';
import { CreateUserScheduleDto } from './dto/create-user-schedule.dto';
import { UpdateUserScheduleDto } from './dto/update-user-schedule.dto';

@Injectable()
export class UserScheduleService {
  create(createUserScheduleDto: CreateUserScheduleDto) {
    return 'This action adds a new userSchedule';
  }

  findAll() {
    return `This action returns all userSchedule`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userSchedule`;
  }

  update(id: number, updateUserScheduleDto: UpdateUserScheduleDto) {
    return `This action updates a #${id} userSchedule`;
  }

  remove(id: number) {
    return `This action removes a #${id} userSchedule`;
  }
}
