import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { AuthenticateUserRes } from './dto/authenticate-user-response.dto';
import { AuthenticateUserDto } from './dto/authenticate-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  prisma = new PrismaClient();
  create(createUserDto: CreateUserDto) {
    this.prisma.user
      .create({
        data: { email: createUserDto.email, password: createUserDto.password },
      })
      .then((res) => ({
        success: true,
        message: 'Succesfuly created new user',
      }))
      .catch((error) => {
        if (error) {
          if (error.errno === 1062)
            return {
              success: false,
              message: 'This username is already taken.',
            };
          console.error(error);
          return {
            success: false,
            message: 'Error during creation of new user',
          };
        }
      });
  }
  async authenticate(
    authenticateUserDto: AuthenticateUserDto,
  ): Promise<AuthenticateUserRes> {
    const user = await this.prisma.user.findFirstOrThrow({
      where: { email: authenticateUserDto.email },
    });
    const result = await bcrypt.compare(
      authenticateUserDto.password,
      user.password,
    );
    if (result) {
      const accessToken = jwt.sign(
        { id: user.id, email: user.email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '300s' }, //usually 5min
      );
      const refreshToken = jwt.sign(
        { id: user.id, email: user.email },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '1d' },
      );
      //save refreshToken in db
      await this.prisma.user.update({
        data: { refreshToken: refreshToken },
        where: { email: authenticateUserDto.email },
      });
      return {
        email: user.email,
        authenticated: true,
        access_token: accessToken,
        refresh_token: refreshToken,
      };
    } else {
      return { authenticated: false };
    }
  }
}
