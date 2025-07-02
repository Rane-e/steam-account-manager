import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmailAccountService } from './email-account.service';
import { EmailAccount } from './entities/email-account.entity';
import { CreateEmailAccountInput } from './dto/create-email-account.input';
import { UpdateEmailAccountInput } from './dto/update-email-account.input';

@Resolver(() => EmailAccount)
export class EmailAccountResolver {
  constructor(private readonly emailAccountService: EmailAccountService) {}

  @Mutation(() => EmailAccount)
  createEmailAccount(@Args('createEmailAccountInput') createEmailAccountInput: CreateEmailAccountInput) {
    return this.emailAccountService.create(createEmailAccountInput);
  }

  @Query(() => [EmailAccount], { name: 'emailAccount' })
  findAll() {
    return this.emailAccountService.findAll();
  }

  @Query(() => EmailAccount, { name: 'emailAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.emailAccountService.findOne(id);
  }

  @Mutation(() => EmailAccount)
  updateEmailAccount(@Args('updateEmailAccountInput') updateEmailAccountInput: UpdateEmailAccountInput) {
    return this.emailAccountService.update(updateEmailAccountInput.id, updateEmailAccountInput);
  }

  @Mutation(() => EmailAccount)
  removeEmailAccount(@Args('id', { type: () => Int }) id: number) {
    return this.emailAccountService.remove(id);
  }
}
