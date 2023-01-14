import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Book } from './entities/book.entity';
export declare class BookService {
    createBook(id: string, title: string, author: string, description: string): Book;
    create(createBookInput: CreateBookInput): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateBookInput: UpdateBookInput): Promise<any>;
    remove(id: string): Promise<any>;
}
