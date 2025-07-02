import { CreateSteamAccountInput } from './create-steam-account.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSteamAccountInput extends PartialType(
  CreateSteamAccountInput,
) {
  @Field(() => String)
  uuid: string;
}
