import { CreateEmailAccountInput } from './create-email-account.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateEmailAccountInput extends PartialType(
  CreateEmailAccountInput,
) {
  @Field(() => String)
  uuid: string;
}
