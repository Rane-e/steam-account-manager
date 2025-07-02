import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SteamAccountService } from './steam-account.service';
import { SteamAccount } from './entities/steam-account.entity';
import { CreateSteamAccountInput } from './dto/create-steam-account.input';
import { UpdateSteamAccountInput } from './dto/update-steam-account.input';

@Resolver(() => SteamAccount)
export class SteamAccountResolver {
  constructor(private readonly steamAccountService: SteamAccountService) {}

  @Mutation(() => SteamAccount)
  createSteamAccount(@Args('createSteamAccountInput') createSteamAccountInput: CreateSteamAccountInput) {
    return this.steamAccountService.create(createSteamAccountInput);
  }

  @Query(() => [SteamAccount], { name: 'steamAccount' })
  findAll() {
    return this.steamAccountService.findAll();
  }

  @Query(() => SteamAccount, { name: 'steamAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.steamAccountService.findOne(id);
  }

  @Mutation(() => SteamAccount)
  updateSteamAccount(@Args('updateSteamAccountInput') updateSteamAccountInput: UpdateSteamAccountInput) {
    return this.steamAccountService.update(updateSteamAccountInput.id, updateSteamAccountInput);
  }

  @Mutation(() => SteamAccount)
  removeSteamAccount(@Args('id', { type: () => Int }) id: number) {
    return this.steamAccountService.remove(id);
  }
}
