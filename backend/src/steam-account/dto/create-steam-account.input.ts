import { InputType, Int, Field } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString, Length } from 'class-validator';
import { GraphQLJSONObject } from 'graphql-type-json';

@InputType()
export class CreateSteamAccountInput {
  @Field(() => String, { description: 'Внешний ключ на почту' })
  email_uuid: string;

  @Field(() => String, { description: 'Логин стим' })
  login: string;

  @Field(() => String, { description: 'Пароль от стима' })
  password: string;

  @Field(() => String, { description: 'Номер телефона', nullable: true })
  phone_number?: string;

  @Field(() => Boolean, { description: 'Снят ли лимит в 5$ с аккаунта' })
  restriction_5dollar_removed: boolean;

  @Field(() => String, { description: 'Номер телефона', nullable: true })
  steam_id64?: string;

  @Field(() => String, { description: 'Код восстановления', nullable: true })
  r_code?: string;

  @Field(() => GraphQLJSONObject, {
    description: 'maFile',
    nullable: true,
  })
  @IsOptional()
  maFile?: Prisma.InputJsonValue;

  @Field(() => Boolean, { description: 'Есть ли бан на аккаунте (КТ/VAC)' })
  isBanned: boolean;
}
