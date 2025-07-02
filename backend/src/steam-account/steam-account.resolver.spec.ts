import { Test, TestingModule } from '@nestjs/testing';
import { SteamAccountResolver } from './steam-account.resolver';
import { SteamAccountService } from './steam-account.service';

describe('SteamAccountResolver', () => {
  let resolver: SteamAccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SteamAccountResolver, SteamAccountService],
    }).compile();

    resolver = module.get<SteamAccountResolver>(SteamAccountResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
