import { Injectable } from '@nestjs/common';
import { CreateSteamAccountInput } from './dto/create-steam-account.input';
import { UpdateSteamAccountInput } from './dto/update-steam-account.input';

@Injectable()
export class SteamAccountService {
  create(createSteamAccountInput: CreateSteamAccountInput) {
    return 'This action adds a new steamAccount';
  }

  findAll() {
    return `This action returns all steamAccount`;
  }

  findOne(id: number) {
    return `This action returns a #${id} steamAccount`;
  }

  update(id: number, updateSteamAccountInput: UpdateSteamAccountInput) {
    return `This action updates a #${id} steamAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} steamAccount`;
  }
}
