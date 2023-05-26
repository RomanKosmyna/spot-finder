import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';

export default class VenueTagsDto {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  categories: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  cuisine: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  features: string;
}
