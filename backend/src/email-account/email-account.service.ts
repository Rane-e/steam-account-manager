import { Injectable } from '@nestjs/common';
import { CreateEmailAccountInput } from './dto/create-email-account.input';
import { UpdateEmailAccountInput } from './dto/update-email-account.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';
import { EmailAccount } from '@prisma/client';

@Injectable()
export class EmailAccountService {
  constructor(
    private readonly prisma: PrismaService,
    @InjectPinoLogger(EmailAccountService.name)
    private readonly logger: PinoLogger,
  ) {}

  async create(dto: CreateEmailAccountInput) {
    this.logger.info({ dto }, 'Creating email account');
    const entity = await this.prisma.emailAccount.create({ data: dto });
    this.logger.debug({ entity }, 'Created email account');
    return entity;
  }

  findAll() {
    this.logger.debug('Listing all email accounts');
    return this.prisma.emailAccount.findMany();
  }

  async findOne(uuid: string): Promise<EmailAccount | null> {
    this.logger.info({ uuid }, 'Lookup email account');
    const entity = await this.prisma.emailAccount.findUnique({
      where: { uuid },
    });

    if (!entity) {
      this.logger.warn({ uuid }, 'Email account not found');
    }

    return entity;
  }

  update(uuid: string, dto: UpdateEmailAccountInput) {
    this.logger.info({ uuid, dto }, 'Updating email account');
    const { uuid: _omit, ...data } = dto;
    return this.prisma.emailAccount.update({
      where: { uuid },
      data,
    });
  }

  remove(uuid: string) {
    this.logger.warn({ uuid }, 'Deleting email account');
    return this.prisma.emailAccount.delete({ where: { uuid } });
  }
}
