import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNotEmpty } from 'class-validator';
import { Transform } from 'class-transformer';

export default class VenueTagsDto {
  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  categories: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  cuisine: string;

  @ApiProperty()
  @IsArray()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  features: string;
}
