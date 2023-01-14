"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const admin = __importStar(require("firebase-admin"));
var serviceAccount = require('../serviceAccountKey.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});
let BookService = class BookService {
    createBook(id, title, author, description) {
        var book = { id: id, title: title, author: author, description: description };
        return book;
    }
    async create(createBookInput) {
        const bookRef = await admin.firestore().collection('books').add(createBookInput);
        const bookSnapshot = await bookRef.get();
        return this.createBook(bookRef.id, bookSnapshot.data().title, bookSnapshot.data().author, bookSnapshot.data().description);
    }
    async findAll() {
        const books = await admin.firestore().collection('books').get();
        console.log(books.docs.map(doc => doc.data()));
        return books.docs.map(doc => doc.data());
    }
    async findOne(id) {
        const books = await admin.firestore().collection('books').doc(id).get();
        return this.createBook(books.id, books.data().title, books.data().author, books.data().description);
    }
    async update(id, updateBookInput) {
        const bookRef = admin.firestore().collection('books').doc(id);
        await bookRef.update({ title: updateBookInput.title, author: updateBookInput.author, description: updateBookInput.description });
        const bookSnapshot = await bookRef.get();
        return this.createBook(bookRef.id, bookSnapshot.data().title, bookSnapshot.data().author, bookSnapshot.data().description);
    }
    async remove(id) {
        const bookRef = admin.firestore().collection('books').doc(id);
        await bookRef.delete();
        return true;
    }
};
BookService = __decorate([
    (0, common_1.Injectable)()
], BookService);
exports.BookService = BookService;
//# sourceMappingURL=book.service.js.map