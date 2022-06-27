import { IsNumber, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsNumber()
  age: number;
}
