import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, Length, Matches } from 'class-validator';
import { UserConstants } from '../../core/constant';
import { Transform } from 'class-transformer';

export default class CreateUserDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @Length(4, 10)
  @Matches(UserConstants.username)
  username: string;

  @ApiProperty({ required: true, example: 'user@mail.com' })
  @IsString()
  @IsNotEmpty()
  @Matches(UserConstants.email)
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @Length(6, 14)
  @Matches(UserConstants.password)
  password: string;
}
