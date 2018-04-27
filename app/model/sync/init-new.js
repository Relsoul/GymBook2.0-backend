const { model } = require('../new');

model.sync({ force: true }).then(() => {
    process.exit();
});