// models/index.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// 1) Import all model factories
const UserFactory = require('./user');
const PersonalDataFactory = require('./PersonalData');
const RoleFactory = require('./Role');
const UserMessageFactory = require('./UserMessage');
const UserRessourceFactory = require('./UserRessource');
const MessageFactory = require('./message');
const RessourceFactory = require('./ressource');

// 2) Initialize models by calling their factories
const User = UserFactory(sequelize, DataTypes);
const PersonalData = PersonalDataFactory(sequelize, DataTypes);
const Role = RoleFactory(sequelize, DataTypes);
const UserMessage = UserMessageFactory(sequelize, DataTypes);
const UserRessource = UserRessourceFactory(sequelize, DataTypes);
const Message = MessageFactory(sequelize, DataTypes);
const Ressource = RessourceFactory(sequelize, DataTypes);

// 3) Define associations
// -- User
User.belongsTo(PersonalData, { foreignKey: 'rgpd_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });

User.hasMany(Message, {
  foreignKey: 'author_id',
  as: 'AuthoredMessages',
});
User.hasMany(Message, {
  foreignKey: 'moderator_id',
  as: 'ModeratedMessages',
});
User.hasMany(Ressource, {
  foreignKey: 'author_id',
  as: 'AuthoredRessources',
});
User.hasMany(Ressource, {
  foreignKey: 'moderator_id',
  as: 'ModeratedRessources',
});

// -- Message
Message.belongsTo(User, { foreignKey: 'author_id', as: 'Author' });
Message.belongsTo(User, { foreignKey: 'moderator_id', as: 'Moderator' });
Message.belongsTo(Message, { foreignKey: 'parent_id', as: 'ParentMessage' });
Message.hasMany(Message, { foreignKey: 'parent_id', as: 'Replies' });

// -- Ressource
Ressource.belongsTo(User, { foreignKey: 'author_id', as: 'Author' });
Ressource.belongsTo(User, { foreignKey: 'moderator_id', as: 'Moderator' });

// -- Many-to-Many
User.belongsToMany(Message, {
  through: UserMessage,
  foreignKey: 'user_id',
});
Message.belongsToMany(User, {
  through: UserMessage,
  foreignKey: 'message_id',
});

User.belongsToMany(Ressource, {
  through: UserRessource,
  foreignKey: 'user_id',
});
Ressource.belongsToMany(User, {
  through: UserRessource,
  foreignKey: 'ressource_id',
});

// 4) Export all models + sequelize instance
module.exports = {
  sequelize,
  User,
  PersonalData,
  Role,
  UserMessage,
  UserRessource,
  Message,
  Ressource,
};
