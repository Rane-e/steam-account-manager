import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateEmailAccountInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
