import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.userModel.findOne({ username: username });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new this.userModel({ ...createUserDto });

    const newUserId = await newUser.save();

    return newUserId.id;
  }
}
