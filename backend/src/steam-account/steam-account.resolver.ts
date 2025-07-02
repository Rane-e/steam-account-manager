import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SteamAccountService } from './steam-account.service';
import { SteamAccount } from './entities/steam-account.entity';
import { CreateSteamAccountInput } from './dto/create-steam-account.input';
import { UpdateSteamAccountInput } from './dto/update-steam-account.input';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Resolver(() => SteamAccount)
export class SteamAccountResolver {
  constructor(
    private readonly steamAccountService: SteamAccountService,
    @InjectPinoLogger(SteamAccountService.name)
    private readonly logger: PinoLogger,
  ) {}

  @Mutation(() => SteamAccount)
  createSteamAccount(
    @Args('createSteamAccountInput')
    createSteamAccountInput: CreateSteamAccountInput,
  ) {
    this.logger.debug('GraphQL mutation createSteamAccount');
    return this.steamAccountService.create(createSteamAccountInput);
  }

  @Query(() => [SteamAccount], { name: 'steamAccount' })
  findAll() {
    this.logger.debug('GraphQL query findAll');
    return this.steamAccountService.findAll();
  }

  @Query(() => SteamAccount, { name: 'steamAccount' })
  findOne(@Args('uuid', { type: () => String }) uuid: string) {
    this.logger.debug('GraphQL query findOne');
    return this.steamAccountService.findOne(uuid);
  }

  @Mutation(() => SteamAccount)
  updateSteamAccount(
    @Args('updateSteamAccountInput')
    updateSteamAccountInput: UpdateSteamAccountInput,
  ) {
    this.logger.debug('GraphQL mutation updateSteamAccount');
    return this.steamAccountService.update(
      updateSteamAccountInput.uuid,
      updateSteamAccountInput,
    );
  }

  @Mutation(() => SteamAccount)
  removeSteamAccount(@Args('uuid', { type: () => String }) uuid: string) {
    this.logger.debug('GraphQL mutation removeSteamAccount');
    return this.steamAccountService.remove(uuid);
  }
}
