const User = require('./User');
const Ressource = require('./Ressource');
const Message = require('./Message');
const UserMessage = require('./UserMessage');
const UserRessource = require('./UserRessource');
const PersonalData = require('./PersonalData');
const Role = require('./Role');
const { sequelize } = require('../config/db');

// Associations User
User.belongsTo(PersonalData, { foreignKey: 'rgpd_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });
User.hasMany(Message, { foreignKey: 'author_id', as: 'AuthoredMessages' });
User.hasMany(Message, { foreignKey: 'moderator_id', as: 'ModeratedMessages' });
User.hasMany(Ressource, { foreignKey: 'author_id', as: 'AuthoredRessources' });
User.hasMany(Ressource, { foreignKey: 'moderator_id', as: 'ModeratedRessources' });

// Associations Message
Message.belongsTo(User, { foreignKey: 'author_id', as: 'Author' });
Message.belongsTo(User, { foreignKey: 'moderator_id', as: 'Moderator' });
Message.belongsTo(Message, { foreignKey: 'parent_id', as: 'ParentMessage' });
Message.hasMany(Message, { foreignKey: 'parent_id', as: 'Replies' });

// Associations Ressource
Ressource.belongsTo(User, { foreignKey: 'author_id', as: 'Author' });
Ressource.belongsTo(User, { foreignKey: 'moderator_id', as: 'Moderator' });

// Associations UserMessage (table de liaison)
User.belongsToMany(Message, { through: UserMessage, foreignKey: 'user_id' });
Message.belongsToMany(User, { through: UserMessage, foreignKey: 'message_id' });

// Associations UserRessource (table de liaison)
User.belongsToMany(Ressource, { through: UserRessource, foreignKey: 'user_id' });
Ressource.belongsToMany(User, { through: UserRessource, foreignKey: 'ressource_id' });

// Exporter tous les modèles et l'instance sequelize
module.exports = {
  sequelize,
  User,
  Ressource,
  Message,
  UserMessage,
  UserRessource,
  PersonalData,
  Role
};
