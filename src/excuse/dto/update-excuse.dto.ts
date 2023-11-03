import { PartialType } from '@nestjs/mapped-types';
import { CreateExcuseDto } from './create-excuse.dto';

export class UpdateExcuseDto extends PartialType(CreateExcuseDto) {}
