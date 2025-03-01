const sequelize = require('../db')
const {DataTypes} = require('sequelize')


// Роли пользователей
const Role = sequelize.define("role", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

// Пользователи
const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    login: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    roleName: {type: DataTypes.STRING, defaultValue: "USER"},
});

// Привязка пользователя к роли
User.belongsTo(Role);
Role.hasMany(User);

// Клиенты (связаны с пользователем)
const Client = sequelize.define("client", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    name: { type: DataTypes.STRING, allowNull: false },
    card: { type: DataTypes.STRING, allowNull: false },
});

Client.belongsTo(User);
User.hasOne(Client);

// Мероприятия
const Event = sequelize.define("event", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.STRING, allowNull: false },
    title: { type: DataTypes.STRING, allowNull: false },
    text: { type: DataTypes.TEXT, allowNull: false },
    pic: { type: DataTypes.STRING, allowNull: false },
});

// Покупки билетов (связаны с клиентами и мероприятиями)
const Buy = sequelize.define("buy", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

Buy.belongsTo(Client);
Client.hasMany(Buy);

Buy.belongsTo(Event);
Event.hasMany(Buy);

module.exports = { Role, User, Client, Event, Buy };