import { Injectable } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import VenueTagsDto from './dto/venue.tags.dto';

@Injectable()
export class VenueService {
  constructor(private readonly prismaService: PrismaService) {}

  async createVenueTags(body: VenueTagsDto) {
    return await this.prismaService.venueTags.create({
      data: {
        categories: body.categories,
        cuisine: body.cuisine,
        features: body.features,
      },
    });
  }

  async getVenueTags() {
    return await this.prismaService.venueTags.findFirst();
  }
}
