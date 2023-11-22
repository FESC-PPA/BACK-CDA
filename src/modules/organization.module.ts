import { Module } from '@nestjs/common'
import { OrganizationController } from 'src/controllers'
import { OrganizationService } from 'src/services'

@Module({
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule { }
