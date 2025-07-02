import { Module } from '@nestjs/common';
import { EmailAccountService } from './email-account.service';
import { EmailAccountResolver } from './email-account.resolver';

@Module({
  providers: [EmailAccountResolver, EmailAccountService],
})
export class EmailAccountModule {}
