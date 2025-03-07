const { sequelize } = require('../models');

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Ensures database is ready before tests run
});

afterAll(async () => {
  await sequelize.close();
});
