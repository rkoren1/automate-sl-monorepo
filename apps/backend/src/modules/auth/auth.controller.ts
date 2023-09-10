import { EntityManager } from '@mikro-orm/mysql';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import * as jwt from 'jsonwebtoken';
import { User } from '../user/entities/user.entity';
import { AuthService } from './auth.service';
import { RefreshTokenResponseDto } from './dto/refresh-token-response.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private em: EntityManager,
  ) {}
  @Get('refreshtoken')
  @ApiOkResponse({
    type: RefreshTokenResponseDto,
  })
  async refreshToken(@Req() req, @Res() res) {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    //find user with upper refresh token
    const foundUser = await this.em.findOneOrFail(
      User,
      { refreshToken: refreshToken },
      { fields: ['email'] },
    );
    if (!foundUser) return res.sendStatus(204);
    //evaluate jwt
    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err || foundUser.email !== decoded.email) {
          return res.sendStatus(403);
        }
        const accessToken = jwt.sign(
          { id: decoded.id, email: decoded.email },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: '300s' },
        );
        res.json({ access_token: accessToken, email: foundUser.email });
      },
    );
  }
  @Get('logout')
  async logout(@Req() req, @Res() res) {
    //on client, also delete accessToken
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //no content
    const refreshToken = cookies.jwt;
    //find user with upper refresh token
    const foundUser = await this.em.findOne(User, {
      refreshToken: refreshToken,
    });
    if (!foundUser) {
      res.clearCookie('jwt', { httpOnly: true, maxAge: 86400000 });
      return res.sendStatus(204);
    }
    //delete refreshtoken in db (make it empty string)
    foundUser.refreshToken = '';
    await this.em.persistAndFlush(foundUser);
    res.clearCookie('jwt', { httpOnly: true, maxAge: 86400000 }); //secure: true - only serves on https
    return res.sendStatus(204);
  }
}
