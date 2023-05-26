import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { VenueTags } from '@prisma/client';
import VenueTagsDto from './dto/venue.tags.dto';
import { VenueService } from './venue.service';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post('/createTags')
  async createTags(
    @Req() req,
    @Body() body: VenueTagsDto,
    @Res() res,
  ): Promise<void> {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.venueService.createVenueTags(body));
  }

  @Get('/getTags')
  async getTags(@Req() req, @Res() res): Promise<VenueTags> {
    return res
      .status(HttpStatus.OK)
      .json(await this.venueService.getVenueTags());
  }
}
