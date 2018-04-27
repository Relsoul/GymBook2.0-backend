const { model } = require('../site');

model.sync({ force: true }).then(() => {
    process.exit();
});