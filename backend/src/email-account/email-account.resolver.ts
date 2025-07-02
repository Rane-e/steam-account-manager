import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EmailAccountService } from './email-account.service';
import { EmailAccount } from './entities/email-account.entity';
import { CreateEmailAccountInput } from './dto/create-email-account.input';
import { UpdateEmailAccountInput } from './dto/update-email-account.input';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Resolver(() => EmailAccount)
export class EmailAccountResolver {
  constructor(
    private readonly emailAccountService: EmailAccountService,
    @InjectPinoLogger(EmailAccountResolver.name)
    private readonly logger: PinoLogger,
  ) {}

  @Mutation(() => EmailAccount)
  createEmailAccount(
    @Args('createEmailInput') createEmailInput: CreateEmailAccountInput,
  ) {
    this.logger.debug('GraphQL mutation createEmailAccount');
    return this.emailAccountService.create(createEmailInput);
  }

  @Query(() => [EmailAccount], { name: 'emailAccounts' })
  findAll() {
    this.logger.debug('GraphQL query findAll');
    return this.emailAccountService.findAll();
  }

  @Query(() => EmailAccount, { name: 'emailAccount' })
  findOne(@Args('uuid', { type: () => String }) uuid: string) {
    this.logger.debug('GraphQL query findOne');
    return this.emailAccountService.findOne(uuid);
  }

  @Mutation(() => EmailAccount)
  updateEmailAccount(
    @Args('updateEmailInput') updateEmailInput: UpdateEmailAccountInput,
  ) {
    this.logger.debug('GraphQL mutation updateEmailAccount');
    return this.emailAccountService.update(
      updateEmailInput.uuid,
      updateEmailInput,
    );
  }

  @Mutation(() => EmailAccount)
  deleteEmailAccount(@Args('uuid', { type: () => String }) uuid: string) {
    this.logger.debug('GraphQL mutation deleteEmailAccount');
    return this.emailAccountService.remove(uuid);
  }
}
