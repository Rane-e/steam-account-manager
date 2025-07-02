import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SteamAccount {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
