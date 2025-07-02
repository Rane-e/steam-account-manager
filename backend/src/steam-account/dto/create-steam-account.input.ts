import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSteamAccountInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
