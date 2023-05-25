import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaService } from '../core/orm/prisma.service';
import { CommonService } from '../common/common.service';
import { PasswordService } from '../password/password.service';
import { JwtService } from '../jwt/jwt.service';

@Module({
  providers: [
    UserService,
    PrismaService,
    CommonService,
    PasswordService,
    JwtService,
  ],
})
export class UserModule {}
