import { prisma } from "../src/utils/db.server";

type Author = {
  firstName: string;
  lastName: string;
};

type Book = {
  title: string;
  isFiction: boolean;
  datePublished: Date;
};

async function seed() {
  await prisma.authors.deleteMany({});
  await Promise.all(
    getAuthors().map((author) => {
      return prisma.authors.create({
        data: {
          firstName: author.firstName,
          lastName: author.lastName,
        },
      });
    })
  );
  const author = await prisma.authors.findFirst({
    where: {
      firstName: "William",
    },
  });
  await Promise.all(
    getBooks().map((book) => {
      const { title, isFiction, datePublished } = book;
      if (author)
        return prisma.books.create({
          data: {
            title,
            isFiction,
            datePublished,
            authorId: author.id,
          },
        });
    })
  );
}

function getAuthors(): Array<Author> {
  return [
    {
      firstName: "Anthony",
      lastName: "Bourdain",
    },
    {
      firstName: "Frank",
      lastName: "Herbert",
    },
    {
      firstName: "William",
      lastName: "Shakespear",
    },
  ];
}

function getBooks(): Array<Book> {
  return [
    {
      title: "Dune",
      isFiction: true,
      datePublished: new Date(),
    },
    {
      title: "Kitchen Confidential",
      isFiction: false,
      datePublished: new Date(),
    },
    {
      title: "Hamlet",
      isFiction: true,
      datePublished: new Date(),
    },
    {
      title: "Rome and Juliet",
      isFiction: true,
      datePublished: new Date(),
    },
  ];
}
export default seed;
