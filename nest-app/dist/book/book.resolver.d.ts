import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
export declare class BookResolver {
    private readonly bookService;
    constructor(bookService: BookService);
    createBook(createBookInput: CreateBookInput): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    updateBook(updateBookInput: UpdateBookInput): Promise<any>;
    removeBook(id: string): Promise<any>;
}
