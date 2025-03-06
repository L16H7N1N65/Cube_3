const request = require('supertest');
const app = require('../../index'); // Your Express app entry point
const { sequelize, Message } = require('../../models');

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('Message API Tests', () => {
  test('POST /messages should create a new message', async () => {
    const res = await request(app)
      .post('/messages')
      .send({
        content: 'This is a test message',
        author_id: 1,
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.content).toBe('This is a test message');
  });

  test('GET /messages should return all messages', async () => {
    const res = await request(app).get('/messages');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
