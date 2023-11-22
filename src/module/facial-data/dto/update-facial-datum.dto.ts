import { PartialType } from '@nestjs/mapped-types';
import { CreateFacialDatumDto } from './create-facial-datum.dto';

export class UpdateFacialDatumDto extends PartialType(CreateFacialDatumDto) {}
