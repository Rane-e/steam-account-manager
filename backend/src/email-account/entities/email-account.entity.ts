import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { GraphQLJSONObject } from 'graphql-type-json';

@ObjectType()
export class EmailAccount {
  @Field(() => ID)
  uuid: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field()
  name: string;

  @Field()
  surname: string;

  @Field()
  phone_number: string;

  @Field()
  reserve_email: string;

  @Field(() => GraphQLJSONObject, { nullable: true })
  other_data?: Prisma.JsonValue;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
