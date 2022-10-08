import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { GuestsService } from './guests.service';
import { CreateGuestDto } from './dto/create-guest.dto';
import { GuestModel } from './models/guests.model';
import { GetGuestFilterDto } from './dto/get-guests.dto';
import { UpdateGuestStatus } from './dto/update-guest-status.dto';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Post()
  create(@Body() createGuestDto: CreateGuestDto) {
    return this.guestsService.create(createGuestDto);
  }

  @Get()
  findAll(@Query() filterGuestDto: GetGuestFilterDto): GuestModel[] {
    if (Object.keys(filterGuestDto).length) {
      return this.guestsService.filteringGuest(filterGuestDto);
    } else {
      return this.guestsService.findAll();
    }
  }

  @Get('/:id')
  findOne(@Param('id') id: string) {
    return this.guestsService.findOne(id);
  }

  @Put('/:id')
  update(
    @Param('id') id: string,
    @Body() guestStatus: UpdateGuestStatus,
  ): GuestModel {
    const { name, phone, address, gender, status, purpose } = guestStatus;
    return this.guestsService.update(
      id,
      name,
      phone,
      address,
      gender,
      status,
      purpose,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guestsService.remove(id);
  }
}
