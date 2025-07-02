import { Injectable } from '@nestjs/common';
import { CreateSteamAccountInput } from './dto/create-steam-account.input';
import { UpdateSteamAccountInput } from './dto/update-steam-account.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SteamAccountService {
  constructor(private readonly prisma: PrismaService) {}

  create(createSteamAccountInput: CreateSteamAccountInput) {
    return this.prisma.steamAccount.create({ data: createSteamAccountInput });
  }

  findAll() {
    return this.prisma.steamAccount.findMany();
  }

  findOne(uuid: string) {
    return this.prisma.steamAccount.findUnique({ where: { uuid } });
  }

  update(uuid: string, updateSteamAccountInput: UpdateSteamAccountInput) {
    const { uuid: _omit, ...data } = updateSteamAccountInput;
    return this.prisma.steamAccount.update({ where: { uuid }, data });
  }

  remove(uuid: string) {
    return this.prisma.steamAccount.delete({ where: { uuid } });
  }
}
