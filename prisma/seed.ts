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

//seed function
async function seed() {
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
  ];
}
