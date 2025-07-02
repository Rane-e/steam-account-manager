import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLJSONObject } from 'graphql-type-json';

@ObjectType()
export class SteamAccount {
  @Field(() => ID)
  uuid: string;

  @Field()
  email_uuid: string;

  @Field()
  login: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  phone_number?: string;

  @Field()
  restriction_5dollar_removed: boolean;

  @Field({ nullable: true })
  steam_id64?: string;

  @Field({ nullable: true })
  r_code?: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  maFile?: Prisma.JsonValue;

  @Field()
  isBanned: boolean;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
