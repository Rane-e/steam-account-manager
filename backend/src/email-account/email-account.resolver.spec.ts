import { Test, TestingModule } from '@nestjs/testing';
import { EmailAccountResolver } from './email-account.resolver';
import { EmailAccountService } from './email-account.service';

describe('EmailAccountResolver', () => {
  let resolver: EmailAccountResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmailAccountResolver, EmailAccountService],
    }).compile();

    resolver = module.get<EmailAccountResolver>(EmailAccountResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
