import { PartialType } from '@nestjs/mapped-types';
import { CreateBasedDto } from './create-based.dto';

export class UpdateBasedDto extends PartialType(CreateBasedDto) {}
