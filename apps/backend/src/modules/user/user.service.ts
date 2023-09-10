import { EntityManager } from '@mikro-orm/mysql';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { AuthenticateUserRes } from './dto/authenticate-user-response.dto';
import { AuthenticateUserDto } from './dto/authenticate-user.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(private em: EntityManager) {}
  create(createUserDto: CreateUserDto) {
    const newUser = this.em.create(User, {
      email: createUserDto.email,
      password: createUserDto.password,
    });
    this.em
      .persistAndFlush(newUser)
      .then(() => ({
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
  authenticate(
    authenticateUserDto: AuthenticateUserDto,
  ): Promise<AuthenticateUserRes> {
    return new Promise((resolve, reject) => {
      this.em
        .findOne(
          User,
          { email: authenticateUserDto.email },
          { fields: ['id', 'email', 'password'] },
        )
        .then((user) => {
          if (!user) return reject({ message: 'invalid credentials' });
          bcrypt
            .compare(authenticateUserDto.password, user.password)
            .then((result) => {
              if (result === true) {
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
                user.refreshToken = refreshToken;
                this.em
                  .persistAndFlush(user)
                  .then(() =>
                    resolve({
                      email: user.email,
                      authenticated: true,
                      access_token: accessToken,
                      refresh_token: refreshToken,
                    }),
                  )
                  .catch((err) => reject(err));
              } else {
                return reject({ authenticated: false });
              }
            })
            .catch((err) => reject(err));
        })
        .catch((err) => reject(err));
    });
  }
}
