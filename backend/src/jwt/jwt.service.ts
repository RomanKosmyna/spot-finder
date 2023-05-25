import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtService {
  async createToken(payload: any, secretKey: string): Promise<string> {
    return jwt.sign(payload, secretKey, { expiresIn: '1m' });
  }
}
