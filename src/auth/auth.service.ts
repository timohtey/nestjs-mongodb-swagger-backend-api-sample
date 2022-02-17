import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<User> {
    const user = await this.usersService.findOne(username);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: any) {
    const payload = { name: user.name, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
