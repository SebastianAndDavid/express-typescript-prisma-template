import { prisma } from '../utils/db.server';

type Book = {
  title: string;
  isFiction: boolean;
  datePublished: Date;
  authorId: number;
};

class BookService {
  static async createBook({
    title,
    isFiction,
    datePublished,
    authorId,
  }: Book): Promise<Book> {
    const newBook = await prisma.books.create({
      data: {
        title,
        isFiction,
        datePublished,
        authorId,
      },
    });
    return newBook;
  }
}

export default BookService;
