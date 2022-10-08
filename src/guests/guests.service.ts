import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuestDto } from './dto/create-guest.dto';
import { GenderStatus, GuestModel, GuestStatus } from './models/guests.model';
import { v4 as uuid } from 'uuid';
import { GetGuestFilterDto } from './dto/get-guests.dto';

@Injectable()
export class GuestsService {
  private guests: GuestModel[] = [];

  create(createGuestDto: CreateGuestDto) {
    const { name, phone, address, purpose } = createGuestDto;
    const guest: GuestModel = {
      id: uuid(),
      name,
      phone,
      address,
      gender: GenderStatus.MAN,
      status: GuestStatus.EMPLOYEE,
      purpose,
    };
    this.guests.push(guest);
    return guest;
  }

  findAll(): GuestModel[] {
    return this.guests;
  }

  findOne(id: string) {
    const found = this.guests.find((guest) => guest.id === id);
    if (!found) {
      throw new NotFoundException('Guest not found.');
    }
    return this.guests.find((guest) => guest.id === id);
  }

  filteringGuest(filterGuestDto: GetGuestFilterDto): GuestModel[] {
    const { gender, status, search } = filterGuestDto;
    let guest = this.findAll();

    if (gender) {
      guest = guest.filter((guest) => guest.gender === gender);
    }

    if (status) {
      guest = guest.filter((guest) => guest.status === status);
    }

    if (search) {
      guest = guest.filter((guest) => {
        if (guest.name.includes(search)) {
          return true;
        } else {
          return false;
        }
      });
    }
    return guest;
  }

  update(
    id: string,
    name: string,
    phone: string,
    address: string,
    gender: GenderStatus,
    status: GuestStatus,
    purpose: string,
  ) {
    const guest = this.findOne(id);
    if (name) {
      guest.name = name;
    }
    if (phone) {
      guest.phone = phone;
    }
    if (address) {
      guest.address = address;
    }
    if (gender) {
      guest.gender = gender;
    }
    if (status) {
      guest.status = status;
    }
    if (purpose) {
      guest.purpose = purpose;
    }

    return guest;
  }

  remove(id: string) {
    const found = this.findOne(id);
    this.guests = this.guests.filter((guest) => guest.id !== found.id);
  }
}
