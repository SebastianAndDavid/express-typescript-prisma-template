import request from 'supertest';
import app from '../src/app';
import seed from '../prisma/seed';

describe('backend author routes', () => {
  beforeEach(async () => {
    await seed();
  });
  it('add a book', async () => {
    const res = await request(app).post('./books').send({ title: 'hi' });
    expect(res.status).toBe(404);
  });
});
