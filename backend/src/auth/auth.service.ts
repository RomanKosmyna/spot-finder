import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { CommonService } from '../common/common.service';
import { EDbField, EDynamicallyAction } from '../core/enum';
import CreateUserDto from '../user/dto/user.dto';
import { PasswordService } from '../password/password.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    private readonly commonService: CommonService,
    private readonly passwordService: PasswordService,
  ) {}

  async login(body: CreateUserDto) {
    const user = await this.commonService.checkIfUserExists(
      EDynamicallyAction.NEXT,
      body.email,
      EDbField.EMAIL,
    );

    await this.passwordService.compare(body.password, user.password);

    const payload = { sub: user.id, username: user.username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
