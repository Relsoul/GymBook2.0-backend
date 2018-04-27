let conf = require('../conf/conf');
const Sequelize = require('sequelize');


const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

if (env === 'test') {
    conf = require('./conf/conf-ci.js');
}

console.log('conn env', env);

const sequelize = new Sequelize(conf.mysql.database, conf.mysql.user, conf.mysql.password, {
    host: conf.mysql.host,
    dialect: 'mysql',
    define: {
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
    },
});

module.exports = sequelize;