const request = require('supertest');
const app = require('../../app');
const { sequelize, User } = require('../../models');


beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe('User API Tests', () => {
  test('POST /users should create a new user', async () => {
    const res = await request(app)
      .post('/users')
      .send({
        username: 'bob',
        email: 'bob@example.com',
        password: 'secret',
      });

    // If your route returns 201 on success:
    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe('bob');
  });

  test('GET /users should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});