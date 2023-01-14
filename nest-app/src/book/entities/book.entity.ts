import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Book {
  @Field(() => String, { description: 'Book\'s id' })
  id: string;
  @Field(() => String, { description: 'Book\'s name' })
  title: string;
  @Field(() => String, { description: 'Book\'s author' })
  author: string;
  @Field(() => String, { description: 'Book\'s description' })
  description: string;
}
