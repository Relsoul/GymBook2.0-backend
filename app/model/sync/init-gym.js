const { model } = require('../gym');

model.sync({ force: true }).then(() => {
    process.exit();
});