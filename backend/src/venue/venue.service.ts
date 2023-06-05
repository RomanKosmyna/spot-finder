import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from '../core/orm/prisma.service';
import VenueTagsDto from './dto/venue.tags.dto';
import VenueDto from './dto/venue.dto';
import { Venue } from '@prisma/client';

@Injectable()
export class VenueService {
  constructor(private readonly prismaService: PrismaService) {}

  async getVenues() {
    return await this.prismaService.venue.findMany();
  }

  async getVenueById(id: number) {
    const venue = await this.prismaService.venue.findFirst({
      where: {
        id: id,
      },
    });
    if (!venue) {
      throw new HttpException('Venue not found', HttpStatus.NOT_FOUND);
    }
    return venue;
  }

  async createVenue(body: VenueDto): Promise<Venue> {
    return await this.prismaService.venue.create({
      data: {
        name: body.name,
        photo: body.photo,
        schedule: body.schedule,
        contact: body.contact,
        description: body.description,
        tags: body.tags,
      },
    });
  }

  async getVenueTags() {
    return await this.prismaService.venueTags.findFirst();
  }

  async createVenueTags(body: VenueTagsDto) {
    return await this.prismaService.venueTags.create({
      data: {
        categories: body.categories,
        cuisine: body.cuisine,
        features: body.features,
      },
    });
  }
}
