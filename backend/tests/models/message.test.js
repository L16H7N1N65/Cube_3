const { Sequelize, DataTypes } = require('sequelize');
const MessageModel = require('../../models/Message');

const sequelizeMock = new Sequelize('sqlite::memory:', { logging: false });

describe('Message Model', () => {
  let Message;

  beforeAll(async () => {
    Message = MessageModel(sequelizeMock, DataTypes);
    await sequelizeMock.sync({ force: true });
  });

  test('Message model should be defined', () => {
    expect(Message).toBeDefined();
  });

  test('Should create a message successfully', async () => {
    const message = await Message.create({
      content: 'Hello, this is a test message!',
      author_id: 1,
    });

    expect(message.content).toBe('Hello, this is a test message!');
    expect(message.author_id).toBe(1);
  });
});
