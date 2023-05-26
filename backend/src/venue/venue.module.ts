import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { PrismaService } from '../core/orm/prisma.service';

@Module({ providers: [VenueService, PrismaService] })
export class VenueModule {}
