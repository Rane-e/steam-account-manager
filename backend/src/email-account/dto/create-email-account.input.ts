import { InputType, Field } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsString, Length } from 'class-validator';
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
