const request = require('supertest');
const app = require('../../app');
const { sequelize, User } = require('../../models'); 

beforeAll(async () => {
  await sequelize.sync({ force: true });

  await User.create({
    username: 'ModeratorUser',
    email: 'moderator@example.com',
    password: 'secret',
    // user_id auto-increments to 1
  });
});

afterAll(async () => {
  // Close DB after all tests
  await sequelize.close();
});

describe('Message API Tests', () => {
  test('POST /messages should create a new message', async () => {
    const res = await request(app)
      .post('/messages')
      .send({
        content: 'This is a test message from integration test',
        author_id: 1,      
        moderator_id: 1,  
      });

    // If 201
    expect(res.statusCode).toBe(201);
    expect(res.body.content).toBe('This is a test message from integration test');
    expect(res.body.moderator_id).toBe(1);
  });

  test('GET /messages should return all messages', async () => {
    const res = await request(app).get('/messages');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
