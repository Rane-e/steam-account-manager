import { Injectable } from '@nestjs/common';
import { CreateSteamAccountInput } from './dto/create-steam-account.input';
import { UpdateSteamAccountInput } from './dto/update-steam-account.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { SteamAccount } from '@prisma/client';

@Injectable()
export class SteamAccountService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectPinoLogger(SteamAccountService.name)
    private readonly logger: PinoLogger,
  ) {}

  async create(dto: CreateSteamAccountInput) {
    this.logger.info({ dto }, 'Creating email account');
    const entity = await this.prisma.steamAccount.create({ data: dto });
    this.logger.debug({ entity }, 'Created email account');
    return entity;
  }

  findAll() {
    this.logger.debug('Listing all steam accounts');
    return this.prisma.steamAccount.findMany();
  }

  async findOne(uuid: string): Promise<SteamAccount | null> {
    this.logger.info({ uuid }, 'Lookup steam account');
    const entity = await this.prisma.steamAccount.findUnique({
      where: { uuid },
    });

    if (!entity) {
      this.logger.warn({ uuid }, 'Steam account not found');
    }

    return entity;
  }

  update(uuid: string, dto: UpdateSteamAccountInput) {
    this.logger.info({ uuid, dto }, 'Steam email account');
    const { uuid: _omit, ...data } = dto;
    return this.prisma.steamAccount.update({ where: { uuid }, data });
  }

  remove(uuid: string) {
    this.logger.warn({ uuid }, 'Deleting steam account');
    return this.prisma.steamAccount.delete({ where: { uuid } });
  }
}
