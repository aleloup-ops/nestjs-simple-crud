import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BookService } from './book.service';
import { BookResolver } from './book.resolver';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

@Module({
  imports: [],
  providers: [BookResolver, BookService],
})
export class BookModule {}
