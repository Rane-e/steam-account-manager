import { CreateSteamAccountInput } from './create-steam-account.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSteamAccountInput extends PartialType(CreateSteamAccountInput) {
  @Field(() => Int)
  id: number;
}
