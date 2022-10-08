import { IsNotEmpty } from 'class-validator';

export class CreateGuestDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  phone: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  purpose: string;
}
