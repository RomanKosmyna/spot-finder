import { Global, Module } from '@nestjs/common';
import { TokenController } from './token.controller';
import { TokenService } from './token.service';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
  imports: [JwtModule],
  controllers: [TokenController],
  providers: [TokenService],
})
export class TokenModule {}
