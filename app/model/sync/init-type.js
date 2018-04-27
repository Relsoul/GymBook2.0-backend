const { model } = require('../type');

model.sync({ force: true }).then(() => {
    process.exit();
});