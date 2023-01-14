import { CreateBookInput } from './create-book.input';
declare const UpdateBookInput_base: import("@nestjs/common").Type<Partial<CreateBookInput>>;
export declare class UpdateBookInput extends UpdateBookInput_base {
    id: string;
    title: string;
    author: string;
    description: string;
}
export {};
