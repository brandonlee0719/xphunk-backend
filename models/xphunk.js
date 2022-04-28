const {Sequelize, DataTypes} = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
});

const XPhunk = sequelize.define("xphunk", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    traitAttributeCount: DataTypes.NUMBER,
    traitBlemish: DataTypes.STRING,
    traitEar: DataTypes.STRING,
    traitEyes: DataTypes.STRING,
    traitFacialHair: DataTypes.STRING,
    traitHair: DataTypes.STRING,
    traitMouth: DataTypes.STRING,
    traitMouthProp: DataTypes.STRING,
    traitNeckAccessory: DataTypes.STRING,
    traitNose: DataTypes.STRING,
    traitSkinTone: DataTypes.STRING,
    traitType: DataTypes.STRING,
    isSale: DataTypes.NUMBER
}, {timestamps : false});

module.exports = XPhunk;
