import { CreateBookInput } from './create-book.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput extends PartialType(CreateBookInput) {
  @Field(() => String, { description: 'Book\'s id' })
  id: string;
  @Field(() => String, { description: 'Book\'s name' })
  title: string;
  @Field(() => String, { description: 'Book\'s author' })
  author: string;
  @Field(() => String, { description: 'Book\'s description' })
  description: string;
}
