import { IsEnum, IsOptional, IsString } from 'class-validator';
import { GenderStatus, GuestStatus } from '../models/guests.model';

export class GetGuestFilterDto {
  @IsOptional()
  @IsEnum(GenderStatus)
  gender?: GenderStatus; //tanda ?  = nullable -> handle nilai null

  @IsOptional()
  @IsEnum(GuestStatus)
  status?: GuestStatus;

  @IsOptional()
  @IsString()
  search?: string;
}
