const sequelize = require('../config/db');
const { DataTypes } = require('sequelize');

const User = require('./user')(sequelize, DataTypes);
const PersonalData = require('./PersonalData')(sequelize, DataTypes);
const Role = require('./Role')(sequelize, DataTypes);
const UserMessage = require('./UserMessage')(sequelize, DataTypes);
const UserRessource = require('./UserRessource')(sequelize, DataTypes);
const Message = require('./message')(sequelize, DataTypes);
const Ressource = require('./ressource')(sequelize, DataTypes);

const db = { sequelize, User, PersonalData, Role, UserMessage, UserRessource, Message, Ressource };

// Associations
User.belongsTo(PersonalData, { foreignKey: 'rgpd_id' });
User.belongsTo(Role, { foreignKey: 'role_id' });
User.hasMany(Message, { foreignKey: 'author_id', as: 'AuthoredMessages' });
User.hasMany(Message, { foreignKey: 'moderator_id', as: 'ModeratedMessages' });
User.hasMany(Ressource, { foreignKey: 'author_id', as: 'AuthoredRessources' });
User.hasMany(Ressource, { foreignKey: 'moderator_id', as: 'ModeratedRessources' });

Message.belongsTo(User, { foreignKey: 'author_id', as: 'Author' });
Message.belongsTo(User, { foreignKey: 'moderator_id', as: 'Moderator' });
Message.belongsTo(Message, { foreignKey: 'parent_id', as: 'ParentMessage' });
Message.hasMany(Message, { foreignKey: 'parent_id', as: 'Replies' });

Ressource.belongsTo(User, { foreignKey: 'author_id', as: 'Author' });
Ressource.belongsTo(User, { foreignKey: 'moderator_id', as: 'Moderator' });

User.belongsToMany(Message, { through: UserMessage, foreignKey: 'user_id' });
Message.belongsToMany(User, { through: UserMessage, foreignKey: 'message_id' });

User.belongsToMany(Ressource, { through: UserRessource, foreignKey: 'user_id' });
Ressource.belongsToMany(User, { through: UserRessource, foreignKey: 'ressource_id' });

module.exports = db;
