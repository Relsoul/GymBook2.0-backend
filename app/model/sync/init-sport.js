const { model } = require('../sport');

model.sync({ force: true }).then(() => {
    process.exit();
});