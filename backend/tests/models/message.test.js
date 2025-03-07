const { Sequelize, DataTypes } = require('sequelize');
const MessageFactory = require('../../models/message'); 

describe('Message Model', () => {
  let sequelizeMock;
  let Message;

  beforeAll(async () => {
    sequelizeMock = new Sequelize('sqlite::memory:', { logging: false });
    Message = MessageFactory(sequelizeMock, DataTypes);
    await sequelizeMock.sync({ force: true });
  });

  afterAll(async () => {
    await sequelizeMock.close();
  });

  test('Message model should be defined', () => {
    expect(Message).toBeDefined();
  });

  test('Should create a message successfully', async () => {
    const msg = await Message.create({
      author_id: 1,
      moderator_id: 1, 
      content: 'Hello from unit test!',
    });
    expect(msg.message_id).toBeGreaterThan(0);
    expect(msg.content).toBe('Hello from unit test!');
    expect(msg.moderator_id).toBe(1);
  });
});
