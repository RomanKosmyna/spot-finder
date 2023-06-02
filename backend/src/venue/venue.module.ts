import { Global, Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { PrismaService } from '../core/orm/prisma.service';
import { VenueController } from './venue.controller';
import { PrismaModule } from '../core/orm/prisma.module';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [PrismaService, VenueService],
  controllers: [VenueController],
})
export class VenueModule {}
