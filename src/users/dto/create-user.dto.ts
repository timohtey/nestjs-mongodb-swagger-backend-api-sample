import { ApiProperty } from '@nestjs/swagger';
import { IsAlpha, IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsAlpha()
  name: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  @MinLength(6)
  password: string;
}
