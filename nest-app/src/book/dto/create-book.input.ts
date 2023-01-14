import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field(() => String, { description: 'Book\'s name' })
  title: string;
  @Field(() => String, { description: 'Book\'s author' })
  author: string;
  @Field(() => String, { description: 'Book\'s description' })
  description: string;
}
