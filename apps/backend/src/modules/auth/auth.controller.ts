import { Controller, Get, Req, Res } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { VerifyErrors, sign, verify } from 'jsonwebtoken';
import { JwtPayloadData } from '../../core/guards/jwt/jwt.middleware';
import { PrismaService } from '../../providers/prisma.service';
import { AuthService } from './auth.service';
import { RefreshTokenResponseDto } from './dto/refresh-token-response.dto';

@Controller()
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private prisma: PrismaService,
  ) {}

  @Get('refreshtoken')
  @ApiOkResponse({
    type: RefreshTokenResponseDto,
  })
  refreshToken(@Req() req, @Res() res) {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    const refreshToken: string = cookies.jwt;
    //find user with upper refresh token
    return this.prisma.user
      .findFirst({
        select: { email: true },
        where: { refreshToken: refreshToken },
      })
      .then((foundUser) => {
        if (!foundUser) return res.sendStatus(204);
        //evaluate jwt
        verify(
          refreshToken,
          process.env.REFRESH_TOKEN_SECRET,
          (err: VerifyErrors | null, decoded: JwtPayloadData | undefined) => {
            if (err || foundUser.email !== decoded.email) {
              return res.sendStatus(403);
            }
            const accessToken = sign(
              { id: decoded.id, email: decoded.email },
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: '300s' },
            );
            res.json({ access_token: accessToken, email: foundUser.email });
          },
        );
      })
      .catch(
        () => res.sendStatus(403), //unauthorized
      );
  }
  @Get('logout')
  logout(@Req() req, @Res() res) {
    //on client, also delete accessToken
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204); //no content
    const refreshToken = cookies.jwt;
    //find user with upper refresh token
    this.prisma.user
      .findFirst({
        select: { email: true },
        where: { refreshToken: refreshToken },
      })
      .then((foundUser) => {
        //delete refreshtoken in db (make it empty string)
        this.prisma.user
          .update({
            data: { refreshToken: '' },
            where: { email: foundUser.email },
          })
          .then(() => {
            res.clearCookie('jwt', { httpOnly: true, maxAge: 86400000 }); //secure: true - only serves on https
            return res.sendStatus(204);
          })
          .catch(() => res.sendStatus(500));
      })
      .catch(() => {
        res.clearCookie('jwt', { httpOnly: true, maxAge: 86400000 });
        return res.sendStatus(204);
      });
  }
}
