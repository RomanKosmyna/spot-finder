import { Body, Controller, HttpStatus, Post, Req, Res } from '@nestjs/common';
import CreateUserDto from '../user/dto/user.dto';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  @Post('/login')
  async login(
    @Req() req,
    @Body() body: CreateUserDto,
    @Res() res,
  ): Promise<User> {
    return res.status(HttpStatus.OK).json(await this.authService.login(body));
  }

  @Post('/registration')
  async register(
    @Req() req,
    @Body() body: CreateUserDto,
    @Res() res,
  ): Promise<User> {
    return res
      .status(HttpStatus.CREATED)
      .json(await this.userService.createUser(body));
  }
}
