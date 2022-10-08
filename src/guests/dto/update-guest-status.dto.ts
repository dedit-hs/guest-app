import { IsEnum, IsOptional } from 'class-validator';
import { GenderStatus, GuestStatus } from '../models/guests.model';

export class UpdateGuestStatus {
  @IsOptional()
  name: string;

  @IsOptional()
  phone: string;

  @IsOptional()
  address: string;

  @IsOptional()
  purpose: string;

  @IsOptional()
  @IsEnum(GenderStatus)
  gender: GenderStatus;

  @IsOptional()
  @IsEnum(GuestStatus)
  status: GuestStatus;
}
