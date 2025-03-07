const request = require('supertest');
const app = require('../app');
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
        username: 'john',
        email: 'j.doe@example.com',
        password: 'test',
      });

    expect(res.statusCode).toBe(201);
    expect(res.body.username).toBe('john');
    expect(res.body.email).toBe('j.doe@example.com');
  });

  test('GET /users should return all users', async () => {
    const res = await request(app).get('/users');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
