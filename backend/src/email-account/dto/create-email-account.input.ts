import { InputType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { IsEmail, IsISO8601, IsOptional } from 'class-validator';
import { GraphQLJSONObject } from 'graphql-type-json';
import { Prisma } from '@prisma/client';

@InputType()
export class CreateEmailAccountInput {
  @Field(() => String, { description: 'Адрес электронной почты' })
  @IsEmail({}, { message: 'Некорректный email' })
  email: string;

  @Field(() => String, { description: 'Пароль от электронной почты' })
  password: string;

  @Field(() => String, { description: 'Имя в профиле почты' })
  name: string;

  @Field(() => String, {
    description: 'Фамилия в профиле почты',
    nullable: true,
  })
  surname?: string;

  @Field(() => GraphQLISODateTime, { description: 'Дата дня рождения' })
  @IsISO8601()
  birthday: Date;

  @Field(() => GraphQLISODateTime, { description: 'Дата регистрации почты' })
  @IsISO8601()
  registration_date: Date;

  @Field(() => String, { description: 'Номер телефона', nullable: true })
  phone_number?: string;

  @Field(() => String, { description: 'Резервная почта', nullable: true })
  reserve_email?: string;

  @Field(() => GraphQLJSONObject, {
    description: 'Другие данные',
    nullable: true,
  })
  @IsOptional()
  other_data?: Prisma.InputJsonValue;
}
