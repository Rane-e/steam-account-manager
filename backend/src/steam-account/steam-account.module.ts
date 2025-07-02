import { Module } from '@nestjs/common';
import { SteamAccountService } from './steam-account.service';
import { SteamAccountResolver } from './steam-account.resolver';

@Module({
  providers: [SteamAccountResolver, SteamAccountService],
})
export class SteamAccountModule {}
