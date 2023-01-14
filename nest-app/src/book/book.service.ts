import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import * as admin from 'firebase-admin'
import apiKey from '../serviceAccountKey.json'
import { Book } from './entities/book.entity';

var serviceAccount = require('../serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

@Injectable()
export class BookService {
  createBook(id: string, title: string, author: string, description: string) : Book {
    var book: Book = {id: id, title: title, author: author, description: description}
    return book;
  }

  async create(createBookInput: CreateBookInput): Promise <any> {
    const bookRef = await admin.firestore().collection('books').add(createBookInput);
    const bookSnapshot = await bookRef.get();
    return this.createBook(bookRef.id, bookSnapshot.data().title, bookSnapshot.data().author, bookSnapshot.data().description);
  }

  async findAll(): Promise <any> {
    const books = await admin.firestore().collection('books').get();
    console.log(books.docs.map(doc => doc.data()));
    return books.docs.map(doc => doc.data());
  }

  async findOne(id: string) : Promise <any> {
    const books = await admin.firestore().collection('books').doc(id).get();
    return this.createBook(books.id, books.data().title, books.data().author, books.data().description);
  }

  async update(id: string, updateBookInput: UpdateBookInput) : Promise <any> {
    const bookRef = admin.firestore().collection('books').doc(id);
    await bookRef.update({title: updateBookInput.title, author: updateBookInput.author, description : updateBookInput.description});
    const bookSnapshot = await bookRef.get();
    return this.createBook(bookRef.id, bookSnapshot.data().title, bookSnapshot.data().author, bookSnapshot.data().description);
  }

  async remove(id: string) : Promise <any> {
    const bookRef = admin.firestore().collection('books').doc(id);
    await bookRef.delete();
    return true;
  }
}
