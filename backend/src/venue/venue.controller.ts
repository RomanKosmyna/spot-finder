import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { VenueTags } from '@prisma/client';
import VenueTagsDto from './dto/venue.tags.dto';
import { VenueService } from './venue.service';
import VenueDto from './dto/venue.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from '../core/file.upload';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Get('/allVenues')
  async allVenues(@Req() req, @Res() res) {
    return res.status(HttpStatus.OK).json(await this.venueService.getVenues());
  }

  @Post('/createVenue')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    }),
  )
  async createVenue(
    @Req() req,
    @Body() body: VenueDto,
    @Res() res,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<void> {
    if (file) {
      body.photo = `public/${file.filename}`;
    }
    return res
      .status(HttpStatus.CREATED)
      .json(await this.venueService.createVenue(body));
  }

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
