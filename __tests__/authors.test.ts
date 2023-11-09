import request from 'supertest';
import app from '../src/app';

describe('backend author routes', () => {
  it('adds a book and returns a status', async () => {
    const res = await request(app).post('/books ').send({
      title: 'Dune Messiah',
      isFiction: true,
      datePublished: new Date(),
      authorId: 2,
    });
    expect(res.status).toBe(200);
  });
});
