const { model } = require('../reserve');

model.sync({ force: true }).then(() => {
    process.exit();
});