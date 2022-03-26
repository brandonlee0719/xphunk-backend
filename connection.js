const { Sequelize } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite'
});
const XPhunk = require('./models/xphunk');

return sequelize.authenticate()
    .then(result => {
        console.log(`SQLite successfully connected!`);
        return XPhunk.sync();
    })
    .then(result => {
        console.log(`XPhunk table created`);
        return result;
    })
    .catch(error => {
        console.error('Unable to connect to SQLite database:', error);
    })
