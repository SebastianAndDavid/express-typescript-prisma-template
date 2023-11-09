import request from 'supertest';
import app from '../src/app';
import seed from '../prisma/seed';

describe('backend author routes', () => {
  beforeEach(async () => {
    await seed();
  });
  it('adds a book and returns a status', async () => {
    const res = await request(app).post('/books ').send({
      title: 'Dune Messiah',
      isFiction: true,
      datePublished: new Date(),
    });
    expect(res.status).toBe(200);
  });
});
