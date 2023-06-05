import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ITokenPayload } from '../core/interface/token.payload';
import { PrismaService } from '../core/orm/prisma.service';
import { ITokenPair } from '../core/interface/token.pair';

@Injectable()
export class TokenService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  async createTokenPair(payload: ITokenPayload): Promise<ITokenPair> {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.sign(payload, { expiresIn: '15m' }),
      this.jwtService.sign(payload, { expiresIn: '35m' }),
    ]);

    await this.prismaService.token.create({
      data: {
        userId: payload.sub,
        accessToken: accessToken,
        refreshToken: refreshToken,
      },
    });

    return {
      accessToken,
      refreshToken,
    };
  }

  async deleteManyByDate(createdAt: Date): Promise<void> {
    await this.prismaService.token.deleteMany({
      where: {
        createdAt: {
          lte: createdAt,
        },
      },
    });
  }

  async validateAccessToken(token: string) {
    try {
      console.log(this.jwtService.verify(token));
      return this.jwtService.verify(token);
    } catch (e) {
      throw new HttpException('Access token not validated', 400);
    }
  }
}
